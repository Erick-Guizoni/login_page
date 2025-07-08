import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa os matchers do jest-dom para toBeInTheDocument, etc.
import CadastroForm from './CadastroForm'; // Ajuste o caminho se seu arquivo estiver em outro lugar

describe('CadastroForm', () => {
  // Teste 1: Verifica se os campos e o botão são renderizados corretamente
  test('deve renderizar os campos de input para nome, email, senha e o botão de cadastro', () => {
    // Renderiza o componente. A função onSubmit é um mock vazio, pois não precisamos testá-la aqui.
    render(<CadastroForm onSubmit={() => {}} />);

    // Verifica se os inputs estão no documento usando seus rótulos (labels)
    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();

    // Verifica se o botão de submit está no documento
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  // Teste 2: Verifica se os valores dos inputs são atualizados ao digitar
  test('deve atualizar o valor dos campos de input quando o usuário digita', () => {
    render(<CadastroForm onSubmit={() => {}} />);

    // Pega os elementos dos inputs
    const nomeInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const senhaInput = screen.getByLabelText(/Senha:/i);

    // Simula a digitação em cada campo
    fireEvent.change(nomeInput, { target: { value: 'Fulano de Tal' } });
    fireEvent.change(emailInput, { target: { value: 'fulano@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'minhasenha123' } });

    // Verifica se os valores dos inputs foram atualizados corretamente
    expect(nomeInput).toHaveValue('Fulano de Tal');
    expect(emailInput).toHaveValue('fulano@example.com');
    expect(senhaInput).toHaveValue('minhasenha123');
  });

  // Teste 3: Verifica se a função onSubmit é chamada com os dados corretos e os campos são limpos
  test('deve chamar a função onSubmit com os dados corretos e limpar os campos após a submissão bem-sucedida', async () => {
    // Cria uma função "mock" (simulada) para onSubmit para verificar se ela foi chamada
    const mockOnSubmit = jest.fn();
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    // Pega os elementos
    const nomeInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const senhaInput = screen.getByLabelText(/Senha:/i);
    const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

    // Preenche os campos
    fireEvent.change(nomeInput, { target: { value: 'Ciclana da Silva' } });
    fireEvent.change(emailInput, { target: { value: 'ciclana@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'outrasenha456' } });

    // Clica no botão de submit
    fireEvent.click(submitButton);

    // `waitFor` é usado porque a função onSubmit pode ser assíncrona no componente real
    await waitFor(() => {
      // Verifica se mockOnSubmit foi chamado exatamente uma vez
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      // Verifica se mockOnSubmit foi chamado com os dados corretos
      expect(mockOnSubmit).toHaveBeenCalledWith({
        nome: 'Ciclana da Silva',
        email: 'ciclana@example.com',
        senha: 'outrasenha456',
      });
    });

    // Verifica se os campos foram limpos após a submissão
    expect(nomeInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(senhaInput).toHaveValue('');
  });

  // Teste 4: Verifica se uma mensagem de erro é exibida quando campos obrigatórios estão vazios
  test('deve exibir uma mensagem de erro se os campos estiverem vazios ao tentar submeter', async () => {
    const mockOnSubmit = jest.fn(); // Ainda mockamos, mas esperamos que NÃO seja chamada
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

    // Tenta submeter sem preencher nada
    fireEvent.click(submitButton);

    // Espera a mensagem de erro aparecer
    await waitFor(() => {
      expect(screen.getByText(/Por favor, preencha todos os campos./i)).toBeInTheDocument();
    });

    // Verifica que a função onSubmit NÃO foi chamada
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  // Teste 5: Verifica o estado de carregamento durante a submissão
  test('deve desabilitar campos e botão e mostrar "Cadastrando..." durante o carregamento', async () => {
    // Simula uma função onSubmit que leva tempo (como uma chamada de API)
    const mockOnSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 100))); // Resolve após 100ms
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    const nomeInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const senhaInput = screen.getByLabelText(/Senha:/i);
    const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

    // Preenche os campos para permitir a submissão
    fireEvent.change(nomeInput, { target: { value: 'Carregando Teste' } });
    fireEvent.change(emailInput, { target: { value: 'load@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'loadpass' } });

    // Clica no botão de submit
    fireEvent.click(submitButton);

    // Verifica o estado inicial de carregamento
    expect(submitButton).toHaveTextContent(/Cadastrando.../i); // Texto do botão muda
    expect(submitButton).toBeDisabled(); // Botão desabilitado
    expect(nomeInput).toBeDisabled(); // Campos desabilitados
    expect(emailInput).toBeDisabled();
    expect(senhaInput).toBeDisabled();

    // Espera a função onSubmit terminar (o mock resolve após 100ms)
    await waitFor(() => {
      expect(submitButton).not.toBeDisabled(); // Botão reabilitado
      expect(submitButton).toHaveTextContent(/Cadastrar/i); // Texto do botão volta ao normal
      expect(nomeInput).not.toBeDisabled(); // Campos reabilitados
      expect(emailInput).not.toBeDisabled();
      expect(senhaInput).not.toBeDisabled();
    });
  });

  // Teste 6: Verifica o tratamento de erro na submissão
  test('deve exibir uma mensagem de erro se a submissão falhar', async () => {
    // Simula uma função onSubmit que rejeita (simulando um erro de API)
    const mockOnSubmit = jest.fn(() => Promise.reject(new Error('Erro simulado da API')));
    render(<CadastroForm onSubmit={mockOnSubmit} />);

    const nomeInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const senhaInput = screen.getByLabelText(/Senha:/i);
    const submitButton = screen.getByRole('button', { name: /Cadastrar/i });

    // Preenche os campos
    fireEvent.change(nomeInput, { target: { value: 'UsuarioErro' } });
    fireEvent.change(emailInput, { target: { value: 'erro@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'senhaerro' } });

    // Clica no botão de submit
    fireEvent.click(submitButton);

    // Espera a mensagem de erro aparecer na tela
    await waitFor(() => {
      expect(screen.getByText(/Ocorreu um erro ao cadastrar. Tente novamente./i)).toBeInTheDocument();
    });

    // Verifica se os campos *não* foram limpos em caso de erro
    expect(nomeInput).toHaveValue('UsuarioErro');
    expect(emailInput).toHaveValue('erro@example.com');
    expect(senhaInput).toHaveValue('senhaerro');
  });
});