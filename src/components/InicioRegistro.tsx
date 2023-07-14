import IconEmail from '../icons/IconEmail'
import IconLockPasswordFill from '../icons/IconPassword'
import IconUser from '../icons/IconUser'
import styles from '../styles/InicioEntrar.module.css'
import { Link } from 'react-router-dom'

const InicioRegistro = () => {
    return(
        <>
        <div className={styles.container1}>
        <div id={styles.formulario}>
          <div>
            <h1>Crie uma conta</h1>
          </div>
          <div>
            <p>
              Digite suas credenciais para se cadastrar:
            </p>
          </div>
          <form >
            <div>
              <label htmlFor="User" className={styles.iconEmail}>
                <IconUser width={20} height={20} className={styles.icones}/>
              </label>
              <input type="User" name="User" id="User" placeholder='Usuário'/>
            </div>
            <div>
              <label htmlFor="email" className={styles.iconEmail}>
                <IconEmail width={20} height={20} className={styles.icones}/>
              </label>
              <input type="email" name="email" id="email" placeholder='Email'/>
            </div>
            <div>
              <label htmlFor="senha" className={styles.iconEmail} id={styles.senha}>
                <IconLockPasswordFill width={25} height={25} className={styles.icones}/>
              </label>
              <input type="password" name="senha" id="senha" placeholder='Senha'/>
            </div>

            <div>
              <button type="submit">Registrar</button>
            </div>
            <div className={styles.voltar}>
              <Link to="/">Voltar</Link>
            </div>
          </form>
        </div>
        </div>
    </>
    )
}

export default InicioRegistro