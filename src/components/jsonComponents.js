const API = "http://localhost:3005";

export const newUserMessage = (newMessage) => {
    fetch(`${API}/messages`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newMessage)
    })
    .then(response => response.json())
    .then(newRecipe => {
        console.log(newRecipe)
    })
    .catch(err => {
        console.log(err)
    })
}

export const newUserProfile = (newUser) => {
    fetch(`${API}/users`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(newRecipe => {
        console.log(newUser)
    })
    .catch(err => {
        console.log(err)
    })
}