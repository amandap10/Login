
import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"







function Login() {

  const navigate = useNavigate(); //Hook para navegação
  const handleLogin = () => {

    navigate('/home');
  }


  return (
  <div className="w-screen h-screen bg-gradient-to-b from-[rgb(128,68,109)] to-[rgba(74,58,105,1)] flex flex-col justify-center items-center">
    <div className="bg-white/10 backdrop-blur-md p-6 shadow-lg flex justify-evenly items-center rounded-xl ">
      <form className="max-w-58">
        <div className="py-9">
          <div className="flex items-center py-5 rounded-xl">
              <FaUser className="fill-white mr-2"/>
              <input className="px-1 bg-white rounded-md w-60" type="text" placeholder='Username'/>
          </div>
          <div className="flex items-center">
              <FaLock className="fill-white mr-2"/>
              <input className="px-1 bg-white rounded-md w-60" type="password" placeholder='Senha' />
          </div>
        </div>
        <div className="flex justify-center bg-[#794b83] rounded-md border border-black">
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
            <p>Não tem uma conta? <a href="">Registrar</a></p>
            <p>ou</p>
            <p>Acesse com o Google 
            <a className="" href="">           
              <img alt="Logo Google" />
            </a>
            </p>
        </div>
      </form>
      
    </div>

    <footer
    className="items-end justify-center flex-row"
    >
      &copy; 2025. Todos os direitos reservados.</footer>
  </div>
  )
}

export default Login
