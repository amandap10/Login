
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { auth } from "../services/firebase";


function Login() {

  const navigate = useNavigate(); //Hook para navegação
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // redireciona para a home
    } catch(err) {
      setError("Email ou senha inválidos");
    }
  };

  const handleregisterClick = () => {
    navigate('/register');
  }


  return (
  <div className="w-screen h-screen bg-gradient-to-b from-[rgb(128,68,109)] flex flex-col justify-center items-center">
    <div className="bg-white/10 backdrop-blur-md p-6 shadow-lg flex justify-evenly items-center rounded-xl ">
      <form className="max-w-58" onSubmit={handleLogin}>
        <div className="py-9">
          <div className="flex items-center py-5 rounded-xl">
              <FaUser className="fill-white mr-2"/>
              <input 
                className="px-1 bg-white rounded-md w-60" 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="flex items-center">
              <FaLock className="fill-white mr-2"/>
              <input 
                className="px-1 bg-white rounded-md w-60" 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="flex justify-center bg-[#ad77ab] rounded-md border border-black">
          <button type="submit">LOGIN</button>
        </div>
        <div className="text-sm/7 mt-4">
            <label className="mr-2">
                <input className="mr-2" type="checkbox"/>
                Lembre de mim?
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>

        <div className="w-full h-px bg-gray-300 mt-2"></div>

        <div className="text-sm/6 flex flex-col items-center justify-center mt-2">
            <p>Não tem uma conta? <button onClick={handleregisterClick} className="text-gray-800 underline">Registre-se</button></p>
            <p>ou</p>
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
