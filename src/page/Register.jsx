import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom"

function Register() {
	const navigate = useNavigate(); //Hook para navegação
	const handleLogin = () => {

	navigate('/register');
	}

	return(
		<div className="w-screen h-screen bg-gradient-to-b from-[rgb(128,68,109)] flex flex-col justify-center items-center">
			<div className="bg-white/10 backdrop-blur-md p-6 shadow-lg flex justify-evenly items-center rounded-xl ">
				<form className="max-w-58">
					<div className="py-5">
						<div className="flex items-center py-2">
							<FaUser className="fill-white mr-2"/>
							<input className="px-2 bg-white rounded-md w-60" type="text" placeholder="Nome"/>
						</div>
						<div className="flex items-center py-2">
							<MdEmail className="fill-white mr-2"/>
							<input className="px-2 bg-white rounded-md w-60" type="email" placeholder="E-mail"/>
						</div>
						<div className="flex items-center py-2">
							<RiLockPasswordFill className="fill-white mr-2"/>
							<input className="px-2 bg-white rounded-md w-60" type="password" placeholder="Senha" />
						</div>
						<div className="flex items-center py-2">
							<RiLockPasswordFill className="fill-white mr-2"/>
							<input className="px-2 bg-white rounded-md w-60" type="password" placeholder="Confirmar Senha" />
						</div>
					</div>
					<div className="text-sm/7 -mt-2">
            		<label className="mr-2">
                		<input className="mr-2" type="checkbox"/>
                		Li e aceito os termos de uso
            		</label>
        			</div>
					<div className="flex justify-center mt-4 bg-[#ad77ab] rounded-md border border-black">
         			<button>REGISTRAR</button>
        			</div>
					  <div className="flex justify-center text-sm mt-2">
                		Já possui conta ? Entrar
        				</div>
				</form>				
			</div>
		
			<footer
			className="mt-14 text-sm"
			>
				&copy; 2025. Todos os direitos reservados.
			</footer>
		</div>
	)
}

export default Register