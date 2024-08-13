import '../styles/Posteo.css'
import { usePosteo } from '../hooks/usePosteo'

export const Posteo = () => {
    const { posteos } = usePosteo()

    return (
        <section className="posteos">
            <ul>
                {posteos?.slice(0, 3).map(post => (
                    <li key={post.id}>
                        <h3> Nombre de usuario </h3>
                        <p> {post.body} </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}