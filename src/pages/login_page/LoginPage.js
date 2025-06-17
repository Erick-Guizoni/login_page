import Input from '../../components/ui/input/Input';
import Text from '../../components/ui/text/Text';
import Buttons from '../../components/ui/buttons/Buttons';
import img from './../../assets/img/guerreiroSangue.gif';
import styles from './login_page.module.scss';
import TextButton from '../../components/ui/text_button/TextButton';


function LoginPage() {
  return (
    <div className={styles.LoginPage}>
        <div className={styles.Blur}></div>
        <div className={styles.AjusteFundo}>
          <img className={styles.imgGuerreiro} src={img} alt="oi"></img>
          <Input text="Digite seu E-mail:"/>
          <Input text="Digite sua Senha:"/>
          <div className={styles.BtnEsqSenha}>
            <TextButton text={"esqueceu a senha?"}/>
          </div>
          <div className={styles.BtnEntrar}>
            <Buttons text={"LOGIN"}/>
          </div>
        </div>
    </div>
  );
}

export default LoginPage;