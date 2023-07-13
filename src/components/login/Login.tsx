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
            <InicioForm/>
        </div>
    )
}

export default Login