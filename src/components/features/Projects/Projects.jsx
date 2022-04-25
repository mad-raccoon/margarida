import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { projectApi } from "../../../api/projectApi";
import Project from "../../shared/Project/Project"



const Projects =()=> {
    const user = useSelector((state) => state.user);
    const [projectList, setProjectList] = useState([])
    const [keyword, setKeyword] = useState("");

    const getProjectList = async()=> {
        const res = await projectApi.getProjects();
        setProjectList(res.projects)
    }

    useEffect(()=>{
        getProjectList()
    }, [])

    const handleEdit =async (id, values)=> {
        await projectApi.editProject(id, values);
        getProjectList();

    }

    const handleKeywordSearch =(event)=> {
        event.preventDefault();
        setKeyword(event.target["keyword"].value)
    }

    const projectFiltered = projectList.filter(x=> keyword === "" || x.keywords.includes(keyword));
    
    return <div>
        Search keyword: 
        <form onSubmit={handleKeywordSearch}>
        <input type="text" name="keyword" />
        <button type="submit">Search !</button>
        </form>

       {projectFiltered.map(item => item.isVisible ? <Project  key={item.id} {...item} onEdit={(values)=> handleEdit(item.id, values)}/> : null)}
    </div>
}

export default Projects