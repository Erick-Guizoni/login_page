import Input from '../../components/ui/input/Input';
import Text from '../../components/ui/text/Text';
import Buttons from '../../components/ui/buttons/Buttons';
import img from './../../assets/img/caveirared.png';
import styles from './login_page.module.scss';


function LoginPage() {
  return (
    <div className={styles.LoginPage}>
        <div className={styles.Blur}></div>
        <div className={styles.AjusteFundo}>
          <img className={styles.imgCaveira} src={img} alt="oi"></img>
          <Text id="idLogin" text="LOGIN"/>
          <Input/>
          <Input/>
          <Buttons text={"esqueceu a senha?"}/>
          <Buttons className={"BtnEntrar"} text={"ENTRAR"}/>
        </div>
    </div>
  );
}

export default LoginPage;