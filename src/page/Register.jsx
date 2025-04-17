import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";


function Register() {
	const navigate = useNavigate(); //Hook para navegação
	
	// Estados dos inputs

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [error, setError] = useState("");

	const handleRegister = async(e) => {
		e.preventDefault();

		if(password !== passwordConfirmed) {
			setError("As senhas não coincidem");
			return;
		}
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			alert("Cadastro realizado com sucesso");
			navigate("/"); // redireciona para a página inicial
		} catch (error) {
			setError("Erro ao Cadastrar");
		}
	}

	return(
		<div className="w-screen h-screen bg-gradient-to-b from-[rgb(128,68,109)] flex flex-col justify-center items-center">
			<div className="bg-white/10 backdrop-blur-md p-6 shadow-lg flex justify-evenly items-center rounded-xl ">
				<form onSubmit={handleRegister} className="max-w-58">
					<div className="py-8">
						<div className="flex items-center py-2">
							<FaUser className="fill-white mr-2"/>
							<input 
								className="px-2 bg-white rounded-md w-60" 
								type="text" 
								placeholder="Nome"
								value={name}
								onChange={(e) => setName(e.target.value)}	
							/>
						</div>
						<div className="flex items-center py-2">
							<MdEmail className="fill-white mr-2"/>
							<input 
								className="px-2 bg-white rounded-md w-60" 
								type="email" 
								placeholder="E-mail"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="flex items-center py-2">
							<RiLockPasswordFill className="fill-white mr-2"/>
							<input 
								className="px-2 bg-white rounded-md w-60" 
								type="password" 
								placeholder="Senha" 
								value={password}
								onChange={(e) => setPassword(e.target.value)}	
							/>
						</div>
						<div className="flex items-center py-2">
							<RiLockPasswordFill className="fill-white mr-2"/>
							<input 
								className="px-2 bg-white rounded-md w-60" 
								type="password" 
								placeholder="Confirmar Senha" 
								value={passwordConfirmed}
								onChange={(e) => setPasswordConfirmed(e.target.value)}	
							/>
						</div>
					
					{error && ( // Mensagem de Erro
              		<p className="text-red-600 text-sm mt-1 ml-2">{error}</p> 
           		)}
					
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