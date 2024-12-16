import { FaUserCircle  , FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";



const Login = () => {
    const [username,setUsername] = useState("");
    const [password, setPassword]= useState("");

    const submitFunction = (event) => {
        event.preventDefault();
        console.log(username)
        console.log(password)
        alert("Enviando mensagem de " + username + ' e senha: ' +  password)
    }


  return (
   <div className="container">
    <form onSubmit={submitFunction}>
        <h1>NigthTown</h1>
        <div className="inputField">
            <input autoCorrect="off"  type="email" placeholder="Digite seu e-mail..." onChange={(e)=> setUsername(e.target.value)} required />
            <FaUserCircle   className="icons" />
        </div>
        <div className="inputField">
            <input autoCorrect="off"  type="password" placeholder="Digite a sua senha..." onChange={(e)=> setPassword(e.target.value)} required/>
            <FaLock className="icons" />
        </div>
        <div className="remenber">
            <label >
                <input type="checkbox" />
                Lembre-me
            </label>
            <a href="">Esqueceu a senha?</a>
        </div>
        <button>Enviar</button>
        <div className="cadastrar">
            <p>Não tem uma conta?<a href="#">Registrar-se</a></p>
        </div>
        
    </form>
   </div>
  )
}

export default Login
