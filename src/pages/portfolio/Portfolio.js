import styles from "./portifolio.module.scss"

function Portfolio() {
  
  return <>
         <main className={styles.container}>
            <div className={styles.packman2}>
                <div className={styles.dots}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.dots2}>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot2}></div>
                </div>
                <div className={styles.circle}></div>
            </div>
             <img className={styles.imagem_main} src={img} alt="oi"></img>
            <div className={styles.profile_erick}>
                <h1 first_name={styles.first_name} className={styles.margin_0} font_principal={styles.font_principal}>Erick</h1>
                <h2 last_name={styles.last_name} className={styles.margin_0} font_principal={styles.font_principal}>&nbsp;Guizoni</h2>
                <p info_profile={styles.info_profile} className={styles.margin_0} font_secundary={styles.font_secundary}>
                    Desde meu primeiro
                    contato com a área de
                    tecnologia em 2024,
                    percebi o quanto esse universo é fascinante.No
                    entanto, foi
                    em 2025 que realmente descobri que essa é a profissão que
                    quero seguir. Atualmente, sou estudante do curso Técnico em
                    Informática para Internet no Senac Francisco Beltrão,
                    aprendendo linguagens de programação FrontEnd, BackEnd e
                    desenvolvimento Mobile, estou me dedicando ao máximo para
                    evoluir e construir um futuro sólido nesse campo.
                    Em maio de 2025 consegui meu estágio como suporte
                    técnico na empresa Megasult.
                </p>
            </div>
        </main>
      </>
};

export default Portfolio;
