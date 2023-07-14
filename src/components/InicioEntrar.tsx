
import { useState } from 'react';
import IconApple from '../icons/IconApple';
import IconBxlFacebook from '../icons/IconFacebook';
import IconGooglePlus from '../icons/IconGoogle';
import IconLockPasswordFill from '../icons/IconPassword';
import IconUser from '../icons/IconUser';
import styles from '../styles/InicioEntrar.module.css'
import { Link } from 'react-router-dom';

const InicioForm = () => {
  const[email, setEmail] = useState<string>('')
  const[senha, setSenha] = useState<string>('')

  function enviar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email)
    console.log(senha)
  }

  return (
    <>
      <div className={styles.container}>
        <div id={styles.formulario}>
          <div>
            <h1>Entrar na Conta</h1>
          </div>
          <div className={styles.icons}>
            <IconBxlFacebook  className={styles.icon}/>
            <IconGooglePlus  className={styles.icon}/>
            <IconApple className={styles.icon} />
          </div>
          <div>
            <p>
              Digite suas credenciais para entrar:
            </p>
          </div>
          <form onSubmit={enviar}>
            <div>
              <label htmlFor="email" className={styles.iconEmail}>
                <IconUser width={20} height={20}/>
              </label>
              <input type="email" name="email" id="email" placeholder='Email'
              onChange={(event)=> {
                setEmail(event.currentTarget.value)
              }}
              />
            </div>

            <div>
              <label htmlFor="senha" className={styles.iconEmail} id={styles.senha}>
                <IconLockPasswordFill width={25} height={25}/>
              </label>
              <input type="password" name="password" id="senha" placeholder='Senha'
              onChange={(event) => {
                setSenha(event.currentTarget.value)
              }}
              />
            </div>

            <div>
              <button type="submit">ENTRAR</button>
            </div>
            <div className={styles.voltar}>
              <Link to="/">Voltar</Link>
            </div>
          </form>
        </div>  
        </div>
    </>
  );
};

export default InicioForm;
