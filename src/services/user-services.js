const BASE_URL='https://cfc-portfolio-user-backend.herokuapp.com'

function fetchUser(id){
    return fetch(BASE_URL+`/user/${id}`).then(res=> res.json());
}

function createUser(user){
    return fetch(BASE_URL+'/add', {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

function updateSnakeScore(user){
    return fetch(BASE_URL+`/update/${user._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(user)
    })
}

export {
    fetchUser,
    createUser,
    updateSnakeScore
}