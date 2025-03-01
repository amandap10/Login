import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import "../styles/Login.css";

import logo from '/src/assets/logo.jpg'
import icon from '/src/assets/google.png'


function Login() {

  const navigate = useNavigate(); //Hook para navegação
  const handleLogin = () => {

    navigate('/home');
  }


  return (
  <div className="app">
    <div className='container'>
      <form>
        <div className="container-logo">
          <img className="logo" src={logo} alt="Logo da empresa" />
        </div>
        <div className="container-form">
          <div className="container-one">
              <FaUser className="icon"/>
              <input className="login" type="text" placeholder='Username'/>
          </div>
          <div className="container-one">
              <FaLock className="icon"/>
              <input className="login" type="password" placeholder='Senha' />
          </div>
        </div>
        <div className="enter">
          <button onClick={handleLogin}>LOGIN</button>
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
              <img src={icon} alt="Logo Google" 
                
              />
            </a>
        </div>
      </form>
      
    </div>

    <footer>&copy; 2025 <a href="https://comandolog.com.br/">Comando</a>. Todos os direitos reservados.</footer>
  </div>
  )
}

export default Login
