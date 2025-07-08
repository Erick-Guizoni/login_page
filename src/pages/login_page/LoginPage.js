import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/ui/input/Input';
import Buttons from '../../components/ui/buttons/Buttons';
import img from './../../assets/img/guerreiroSangue.gif';
import styles from './login_page.module.scss';
import TextButton from '../../components/ui/text_button/TextButton';

// IMPORTAR O useAuth
// O caminho deve ser relativo à LoginPage.js.
// Se LoginPage.js está em src/pages/login_page/
// e AuthContext.js está em src/context/AuthContext.js
// Você precisa subir duas pastas (..) e depois entrar em 'context'.
import { useAuth } from '../../context/AuthContext';


function LoginPage() {
  const navigate = useNavigate(); // Inicialize o hook de navegação
  const { login } = useAuth();   // Pega a função 'login' do seu contexto de autenticação

  const handleLoginSubmit = () => {
    console.log('Login submetido!');
    alert('Tentativa de Login!');

    // --- Sua Lógica de Autenticação Real Viria AQUI ---
    // Exemplo:
    // const email = 'valor_do_email_do_input';
    // const senha = 'valor_da_senha_do_input';
    // const autenticadoComSucesso = await suaApiDeLogin(email, senha); // Chama sua API

    // Se o login for bem-sucedido (substitua 'true' pela sua condição real de sucesso)
    if (true /* Se o login for bem-sucedido */) {
      login(); // CHAMA A FUNÇÃO LOGIN DO AuthContext para atualizar o estado 'taLogado'
      navigate('/home'); // Redireciona para a página protegida (Home)
    } else {
      // Lógica de erro de login, por exemplo:
      // alert('Credenciais inválidas!');
    }
  };

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Blur}></div>
      <div className={styles.AjusteFundo}>
        <img className={styles.imgGuerreiro} src={img} alt="guerreiro"></img>

        {/* Formulário de Login */}
        <>
          {/* Você precisará adicionar estados aqui (ou em um subcomponente LoginForm)
              para pegar os valores digitados nos Inputs. Por exemplo:
              const [email, setEmail] = useState('');
              <Input text="Digite seu E-mail:" value={email} onChange={(e) => setEmail(e.target.value)} />
          */}
          <Input text="Digite seu E-mail:" />
          <Input text="Digite sua Senha:" />
          <div className={styles.BtnEsqSenha}>
            <TextButton text={"esqueceu a senha?"} />
          </div>
          <div className={styles.BtnEntrar}>
            <Buttons text={"LOGIN"} onClick={handleLoginSubmit} />
          </div>
          <p>
            Não tem uma conta?{' '}
            {/* Este botão navega para a rota /cadastro */}
            {/* {<Link to={"/cadastro"}>Cadastre-se aqui!</Link>} */}
            <TextButton text={"Cadastre-se aqui!"}/>
          </p>
        </>
      </div>
    </div>
  );
}

export default LoginPage;