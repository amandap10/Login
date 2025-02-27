import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import './Login.css'
import logo from '../../assets/logo.jpg'
import icon from '../../assets/google.png'


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Envio " + username + " " + password);
    }

  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="container-logo">
          <img className="logo" src={logo} alt="Logo da empresa" />
        </div>
        <div className="container-form">
          <div className="container-one">
              <FaUser className="icon"/>
              {/* Função "onChange" vai captar os dados preenchidos dos usuários a partir do momento que for inserido e enviado */}
              <input className="login" type="text" placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div className="container-one">
              <FaLock className="icon"/>
              <input className="login" type="password" placeholder='Senha' 
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
        </div>
        <div className="enter">
          <button>LOGIN</button>
        </div>
        <div className="recall-forget">
            <label >
                <input className="check" type="checkbox"/>
                Lembre de mim?
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
        
        <div className="line"></div>

        <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Registrar</a></p>
            <p>ou</p>
            
            <a className="icon-google" href="">            
              <img src={icon} alt="Logo Google" />
            </a>
        </div>
      </form>
      
    </div>

    <footer>&copy; 2025 <a href="https://comandolog.com.br/">Comando</a>. Todos os direitos reservados.</footer>
    </>
  )
}

export default Login
