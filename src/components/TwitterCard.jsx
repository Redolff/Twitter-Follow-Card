import { Card } from "./Card"
import { Logout } from "./Logout"
import { Initiation } from './Initiation'

export const TwitterCard = () => {
    return (
        <section className="home">
            <div className="inicio">
                <Initiation />
            </div>
            <section className="twitter-card">
                <h2 style={{ color: '#fff' }}> A quién seguir </h2>
                <Card userName='BiciGoga' initialIsFollowing>
                    Goga Ruiz-Sandoval
                </Card>
                <Card userName='juampiramos9' initialIsFollowing>
                    Juan Pablo Ramos
                </Card>
                <Card userName='MalditosNerdsVX' initialIsFollowing>
                    Malditos Nerds
                </Card>
                <Card userName='PLMclips' initialIsFollowing>
                    Paren La Mano Clips
                </Card>
                <Card userName='luquitasrodriguez' initialIsFollowing>
                    Luquitas Rodriguez
                </Card>
                <Card userName='alfremontes' initialIsFollowing>
                    Alfredo Montes de Oca
                </Card>
                <Logout />
            </section>
        </section>
    )
}   