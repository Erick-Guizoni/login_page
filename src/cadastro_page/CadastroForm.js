import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para redirecionamento

// Agora, CadastroForm não recebe mais a prop onSubmit,
// pois ele mesmo gerenciará a submissão e a navegação.
function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Novo estado para mensagem de sucesso

  const navigate = useNavigate(); // Inicialize o hook de navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpa erros anteriores
    setSuccessMessage(''); // Limpa mensagens de sucesso anteriores

    // 1. Simples validação de campos vazios
    if (!nome || !email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true); // Ativa o estado de carregamento

    try {
      // 2. SIMULAÇÃO de uma chamada à API para cadastro
      // Em um cenário real, aqui você faria algo como:
      // const response = await api.post('/cadastro', { nome, email, senha });
      // await new Promise(resolve => setTimeout(resolve, 2000)); // Simula delay de 2 segundos
      console.log('Tentando cadastrar:', { nome, email, senha });

      // Simulação de SUCESSO (pode ser trocado por Promise.reject para testar erro)
      const mockApiCall = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (nome === 'erro') { // Exemplo: simula um erro se o nome for 'erro'
            reject(new Error('Erro simulado de servidor.'));
          } else {
            resolve({ message: 'Usuário cadastrado com sucesso!' });
          }
        }, 1500); // Simula um atraso de 1.5 segundos
      });

      const response = await mockApiCall;

      setSuccessMessage(response.message); // Define a mensagem de sucesso
      // 3. Limpar os campos após o sucesso
      setNome('');
      setEmail('');
      setSenha('');

      // 4. Redirecionar para a página de login ou home após o cadastro bem-sucedido
      // Ajuste o '/login' para a rota que você quer que o usuário vá.
      // Pode ser '/' (sua LoginPage) ou '/home' se ele for logado automaticamente.
      console.log('Cadastro bem-sucedido! Redirecionando...');
      setTimeout(() => { // Pequeno delay antes de redirecionar para a mensagem ser vista
        navigate('/'); // Redireciona para a rota da sua LoginPage
      }, 1000);

    } catch (err) {
      // 5. Tratar erros da API
      console.error('Erro no cadastro:', err);
      setError(`Ocorreu um erro ao cadastrar: ${err.message || 'Tente novamente.'}`);
    } finally {
      setIsLoading(false); // Desativa o estado de carregamento
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ /* Adicione estilos inline ou use um arquivo CSS para o formulário */ }}>
      <h2>Crie sua Conta</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>} {/* Mensagem de erro */}
      {successMessage && <p style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</p>} {/* Mensagem de sucesso */}
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={isLoading} // Desabilita campos durante o carregamento
          aria-required="true" // Adiciona acessibilidade
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={isLoading}
          aria-required="true"
        />
      </div>
      <button type="submit" disabled={isLoading} style={{ marginTop: '15px' }}>
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  );
}

export default CadastroForm;