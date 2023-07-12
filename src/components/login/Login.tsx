import InicioForm from "../InicioForm"
import InicioInfo from "../InicioInfo"

import styles from "../../styles/Login.module.css"

const Login = () => {
    return(
        <div className={styles.container}>
            <InicioInfo/>
            <InicioForm/>
        </div>
    )
}

export default Login