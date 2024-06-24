import './App.css'
import { TwitterCard } from './components/TwitterCard';

const App = () => {

    return (
        <section className='App'>
            <TwitterCard userName='BiciGoga' initialIsFollowing>
                Goga Ruiz-Sandoval
            </TwitterCard>
            <TwitterCard userName='juampiramos9' initialIsFollowing>
                Juan Pablo Ramos
            </TwitterCard>
            <TwitterCard userName='MalditosNerdsVX' initialIsFollowing>
                Malditos Nerds
            </TwitterCard>
        </section>
    )
}

export default App