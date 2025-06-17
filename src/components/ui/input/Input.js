import styles from './input.module.scss'

function Input({text}){
    return<>
    <label className={styles.TextLabel}>{text}</label>
    <input className={styles.Input}></input>
    </>
}

export default Input;