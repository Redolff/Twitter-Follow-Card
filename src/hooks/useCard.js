import { useState } from "react"

export const useCard = ({ initialIsFollowing }) => {
    const [isFollowing, setIsFollowing] = useState({ initialIsFollowing })

    const text = `${isFollowing ? 'Siguiendo' : 'Seguir'}`

    const buttonClassName = isFollowing 
        ? 'tw-card-button is-following' 
        : 'tw-card-button'

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return { handleFollow, buttonClassName, text }
}