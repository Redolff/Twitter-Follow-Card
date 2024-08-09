import { useState } from "react"

export const useCard = ({ initialIsFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = `${isFollowing ? 'Siguiendo' : 'Dejar de seguir'}`

    const buttonClassName = isFollowing 
        ? 'tw-card-button is-following' 
        : 'tw-card-button'

    return { isFollowing, setIsFollowing, text, buttonClassName }
}