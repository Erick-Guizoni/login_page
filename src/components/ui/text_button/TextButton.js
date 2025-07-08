import styles from "./text_buton.module.scss"

function TextButton({text}){
    return<>
    <button className={styles.TextButton} onClick={"/cadastro"}>{text}</button>
</>
}

export default TextButton;