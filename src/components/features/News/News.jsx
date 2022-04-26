import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { newApi } from "../../../api/newApi";
import New from "../../shared/New/New"



const News =()=> {
    const user = useSelector((state) => state.user);
    const [newList, setNewList] = useState([])
    const [keyword, setKeyword] = useState("");

    const getNewList = async()=> {
        const res = await newApi.getNews();
        setNewList(res.news)
    }

    useEffect(()=>{
        getNewList()
    }, [])

    const handleEdit =async (id, values)=> {
        await newApi.editNew(id, values);
        getNewList();

    }

    const handleKeywordSearch =(event)=> {
        event.preventDefault();
        setKeyword(event.target["keyword"].value)
    }

    const newFiltered = newList.filter(x=> keyword === "" || x.keywords.includes(keyword));
    
    return <div>
        Search keyword: 
        <form onSubmit={handleKeywordSearch}>
        <input type="text" name="keyword" />
        <button type="submit">Search !</button>
        </form>

       {newFiltered.map(item => item.isVisible ? <New  key={item.id} {...item} onEdit={(values)=> handleEdit(item.id, values)}/> : null)}
    </div>
}

export default News