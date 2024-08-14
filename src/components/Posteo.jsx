import '../styles/Posteo.css'
import { usePosteo } from '../hooks/usePosteo'
import { useLogin } from '../hooks/useLogin'

export const Posteo = ({ post }) => {
    const { userLogin } = useLogin()
    const { posteos } = usePosteo()

    return (
        <section className="posteos">
            <ul>
                {userLogin && post 
                    ? <li>
                        <h3> @{userLogin} </h3>
                        <p> {post} </p>
                    </li>
                    : null
                }
                {posteos?.slice(0, 3).map(x => (
                    <li key={x.id}>
                        <h3> @alfremontes </h3>
                        <p> {x.body} </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}