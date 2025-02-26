import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import './Login.css'


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Envio " + username + " " + password);
    }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Acesse o Sistema</h2>
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
        <div className="enter">
          <button>LOGIN</button>
        </div>
        <div className="recall-forget">
            <label>
                <input type="checkbox"/>
                Lembre de mim?
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>
        

        <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
