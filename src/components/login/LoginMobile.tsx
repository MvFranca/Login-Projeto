import InicioForm from "../InicioEntrar"
import InicioInfo from "../InicioInfo"
import styles from '../../styles/Login.module.css'


const LoginMobile = () => {
    return(
        <div className={styles.container2}>
            <div className={styles.info}>
                <InicioInfo
                opcao = "Registrar-se"
                caminho = '/registrar'
                />
            </div>
                <InicioForm/>
        </div>
    )
}

export default LoginMobile