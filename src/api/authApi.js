const dummyUsers = [{username: "margarida", email:"m@m.com",   password: "w"}, {username: "ana", email:"a@a.com",  password: "w"}]

 const authenticate =(username, password)=> {

    // TODO: replace with real api
    const user = dummyUsers.find(x=>x.username === username);

   if(user && user.password === password) {
    return user;
   }

   throw new Error("403 - user not found")
}

const register = (user)=> {
    // add new user to the list
    dummyUsers.push(user)
    return true;
}

export const authApi = {
    authenticate
}