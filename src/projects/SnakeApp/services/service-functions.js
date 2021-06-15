const BASE_URL='https://cfc-snake.herokuapp.com/snake'


function fetchComments(){
    return fetch(BASE_URL).then(res => res.json())
}

function addComment(newComment){
    return fetch(BASE_URL+'/add', {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(newComment)
    }).then(res => res.json())
}

function updateComment(userComment){
    return fetch(BASE_URL+`/update/${userComment._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(userComment)
    }).then(res => res.json());
}

function deleteComment(id){
    return fetch(BASE_URL+`/delete/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'Application/json'
        }
    }).then(res=>res.json());
}

export {fetchComments, addComment, updateComment, deleteComment}