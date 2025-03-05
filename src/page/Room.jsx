import { useNavigate } from "react-router-dom"

function Room() {
    const navigate = useNavigate(); //Hook para navegação
    const handleLogin = () => {
  
      navigate('/room');
    }

    return (
        
        <div id="page-room">

            
            <header>
                <div className="content">
        
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala</h1>
                </div>

                <form >
                    <textarea
                        placeholder="O que você quer perguntar?"
                    />

                    <div className="form-footer">
                      
                        <button
                            onClick={handleLogin}
                        >
                            Enviar pergunta</button>
                    </div>
                </form>
            
            </main>
        </div>
    )
}

export default Room