import Project from "../../shared/Project/Project"

const test = {title: "titulo X", dateCreated: "123", content: "abc", isVisible: true}

const projectList = [{id: "1", title: "titulo X", dateCreated: "1111", content: "eeeeeeeee", isVisible: true},
    {id: "12", title: "titulo y", dateCreated: "2222", content: "xxxxxx", isVisible: true},
    {id: "3", title: "titulo z", dateCreated: "333", content: "zzzzzz", isVisible: false}]


const Projects =()=> {
    const isAuthenticated = true;

    return <div>
       {projectList.map(item => item.isVisible || isAuthenticated ? <Project  key={item.id} {...item}/> : null)}
    </div>
}

export default Projects