import background from '../assets/background.svg'
import logo from '../assets/grabIcon.svg'
import email from '../assets/emailIcon.svg'
import senha from '../assets/senhaIcon.svg'

import '../styles/home.css'

export function Home(){
    return(
        <div className="container">
            <main className="form">
                <img src={logo} alt="logo" />
                <form>
                    <input type="text" name="Email"/>

                    <input type="number" name="password" />

                    <button type="submit">Entrar</button>
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