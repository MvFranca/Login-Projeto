import InicioInfo from "../InicioInfo"
import InicioRegistro from "../InicioRegistro"
import styles from "../../styles/Login.module.css"

const Registro = () => {
    return(
        <div  className={styles.container}>
            <div className={styles.info}>
                <InicioInfo
                opcao= 'Entrar'
                caminho = '/'
                />
            </div>
            <InicioRegistro/>
        </div>
    )
}

export default Registro