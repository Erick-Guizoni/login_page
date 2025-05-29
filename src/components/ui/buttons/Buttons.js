import styles from './Buttons.module.scss'

function Buttons({text}){
    return<>
    <button className={styles.Buttons}>{text}</button>
    </>
}

export default Buttons;