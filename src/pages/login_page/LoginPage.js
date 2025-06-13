import Input from '../../components/ui/input/Input';
import Text from '../../components/ui/text/Text';
import Buttons from '../../components/ui/buttons/Buttons';
import styles from './login_page.module.scss'


function LoginPage() {
  return (
    <div className={styles.LoginPage}>
        <Text id="idLogin" text="LOGIN"/>
        <Input/>
        <Input/>
        <Buttons text={"esqueceu a senha?"}/>
        <Buttons className={"BtnEntrar"} text={"ENTRAR"}/>
    </div>
  );
}

export default LoginPage;