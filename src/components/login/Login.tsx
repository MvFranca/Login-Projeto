import InicioForm from "../InicioEntrar"
import InicioInfo from "../InicioInfo"

import styles from "../../styles/Login.module.css"

const Login = () => {
    return(
        <div className={styles.container}>
            <InicioInfo
            opcao = "Registrar-se"
            caminho = '/registrar'
            />
            <div
            className={styles.info}
            ><InicioForm/>
            </div>
        </div>
    )
}

export default Login