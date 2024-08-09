import { Card } from "./Card"
import { Logout } from "./Logout"

export const TwitterCard = () => {
    return (
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
            <Logout />
        </section>
    )
}   