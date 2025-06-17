import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

function Header() {
  return <>
    <header className={styles.Header}>
      {/* <div className={styles.TextHeader}>
        <h1>REACT EU PERDI!!!</h1>
      </div> */}
      <div className={styles.Btns}>
        <div className={styles.Btn}>
          <Link className={styles.BtnHeader} to={'/home'}>HOME</Link>
        </div>
        <div className={styles.Btn}> 
          <Link className={styles.BtnHeader} to={'/'}>LOGIN</Link>
        </div>    
  </div>
    </header>
  </>
}

export default Header;  