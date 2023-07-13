import styles from "../styles/InicioInfo.module.css";

 type elementos = {
    opcao: string,
    caminho: string,
}

const InicioInfo = ({opcao, caminho}: elementos) => {
    return(
        <div className={styles.container}>
            <div className={styles.informacoes}>
                <h1>
                    SIMPLIFICA
                </h1>
                <p>
                    Este é o melhor ambiente para aprender os conceitos iniciais sobre lógica de programação.
                </p>
            </div>
            <div className={styles.botoes}>
                <div className={styles.entrar}>
                    <a href="#" >
                        Entrar
                    </a>
                </div>
                <div>
                    <a href={`${caminho}`}>
                        {opcao}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default InicioInfo;