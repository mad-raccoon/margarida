let dummyNews = [{id: 1, title: "project 1", content: "project 1 content", keywords: ["art", "math"], isVisible: true} , 
{id: 2, title: "project 2", content: "project 2 content", keywords: ["art", "math", "science"], isVisible: true},
{id: 3, title: "project 3", content: "project 3 content", keywords: ["math"]},
{id: 4, title: "project 4", content: "project 4 content", keywords: ["art", "science"], isVisible: true} ]


const getNews =()=> {
    // TODO: replace with real api
    return new Promise((resolve, reject) => {    
        setTimeout(resolve({projects: dummyNews}), 
        Math.random() * 1000)
})
};

const editNew =(id, values)=> {
    // TODO: replace with real api
    return new Promise((resolve, reject) => {    

        dummyNews = dummyNews.map(x=> x.id ===id? {...x, ...values}: x)



        setTimeout(resolve({test:"success"}), 
        Math.random() * 1000)
})
};

export const newApi = {
    getNews,
    editNew
}