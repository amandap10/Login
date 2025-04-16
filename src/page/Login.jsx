
import { FaUser, FaLock, FaGoogle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"







function Login() {

  const navigate = useNavigate(); //Hook para navegação
  const handleLogin = () => {

    navigate('/home');
  }


  return (
  <div className="w-screen h-screen bg-gradient-to-b from-[rgb(128,68,109)] flex flex-col justify-center items-center">
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
        <div className="flex justify-center bg-[#ad77ab] rounded-md border border-black">
          <button onClick={handleLogin}>LOGIN</button>
        </div>
        <div className="text-sm/7 mt-4">
            <label className="mr-2">
                <input className="check mr-2" type="checkbox"/>
                Lembre de mim?
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>

        <div className="w-full h-px bg-gray-300 mt-2"></div>

        <div className="text-sm/6 flex flex-col items-center justify-center mt-2">
            <p>Não tem uma conta? <a href="">Registrar</a></p>
            <p><a href="">Acesse com o Google</a></p> <FaGoogle className="-mr-40 -mt-5"/>
        </div>
      </form>
      
    </div>

    <footer
    className="mt-14 text-sm"
    >
      &copy; 2025. Todos os direitos reservados.</footer>
  </div>
  )
}

export default Login
