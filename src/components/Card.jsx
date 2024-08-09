import { useCard } from "../hooks/useCard"

export const Card = ({ children, userName, initialIsFollowing }) => {

    const { handleFollow, buttonClassName, text } = useCard({ initialIsFollowing })
    
    return (
        <article className="tw-card">

            <header className="tw-card-header">
                <img 
                    className="tw-card-avatar"
                    alt="imagen de la persona"
                    src={`https://unavatar.io/${userName}`}
                />
                <div className="tw-card-info">
                    <strong> {children} </strong>
                    <span className="tw-card-infoUserName"> @{userName} </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleFollow}>
                    <span className="tw-card-text"> {text} </span>
                    <span className="tw-card-unfollow"> Dejar de seguir </span>
                </button>
            </aside>

        </article>
    )
}