const dummyProjects = [{id: 1, title: "project 1", content: "project 1 content"}, 
{id: 2, title: "project 2", content: "project 2 content"},
{id: 3, title: "project 3", content: "project 3 content"},
{id: 4, title: "project 4", content: "project 4 content"}]


const getProjects =()=> {
    // TODO: replace with real api
    return dummyProjects;
}

export const projectApi = {
    getProjects
}