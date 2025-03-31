import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"


import logo from '/src/assets/logo.jpg'
import icon from '/src/assets/google.png'


function Login() {

  const navigate = useNavigate(); //Hook para navegação
  const handleLogin = () => {

    navigate('/home');
  }


  return (
  <div className="">
    <div className="">
      <form className="">
        <div className="">
          <img className="logo" src={logo} alt="Logo da empresa" />
        </div>
        <div className="">
          <div className="">
              <FaUser className="icon"/>
              <input className="login" type="text" placeholder='Username'/>
          </div>
          <div className="">
              <FaLock className="icon"/>
              <input className="login" type="password" placeholder='Senha' />
          </div>
        </div>
        <div className="">
          <button onClick={handleLogin}>LOGIN</button>
        </div>
        <div className="">
            <label >
                <input className="check" type="checkbox"/>
                Lembre de mim?
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
        
        <div className=""></div>

        <div className="">
            <p>Não tem uma conta? <a href="#">Registrar</a></p>
            <p>ou</p>
            <p>Acesse com o Google 
            <a className="" href="">           
              <img src={icon} alt="Logo Google" />
            </a>
            </p>
        </div>
      </form>
      
    </div>

    <footer>&copy; 2025 <a href="https://comandolog.com.br/">Comando</a>. Todos os direitos reservados.</footer>
  </div>
  )
}

export default Login
