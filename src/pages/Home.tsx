import background from '../assets/background.svg'
import logo from '../assets/grabIcon.svg'
import googleIconImg from '../assets/google-icon.svg'

import '../styles/home.css'

export function Home(){
    return(
        <div className="container">
            <main className="form">
                <img src={logo} alt="logo" />
                <form>
                    <input type="text" name="Email" id="email"/>
                    <input type="text" name="password" id="senha"/>

                    <button type="submit">Entrar</button>
                    <button  id='google' >
                        <img src={googleIconImg} alt="google" />
                        Entre com sua conta Google
                    </button>
                </form>

                <p>
                    problemas para entrar?
                    <a href="#">clique aqui</a>
                </p>
            </main>

            <aside className="backgroud">
                <img src={background} alt="background" />
            </aside>
        </div>
    )
}