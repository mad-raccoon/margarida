const dummyUsers = [{username: "margarida", email:"m@m.com", roles: ["admin"]}, 
{username: "ana", email:"a@a.com",  password: "w", roles: ["member"]}]

 const authenticate =(username, password)=> {

   return new Promise((resolve, reject) => {
    const user = dummyUsers.find(x=>x.username === username);

    setTimeout(resolve({user}), 
    Math.random() * 1000)
})
}

const register = (user)=> {
    // add new user to the list
    dummyUsers.push(user)
    return true;
}

export const authApi = {
    authenticate
}