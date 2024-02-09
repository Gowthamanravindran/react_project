
export function increase_likes(likes: number) {
    console.log('trying to increase')
    return {
        type: "ADD_LIKES",
        likes: (likes + 1)
      }
}

export function decrease_likes(likes: number) {
    return {
        type: "REMOVE_LIKES",
        likes: (likes - 1)
      }
}