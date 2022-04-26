import { useState } from "react";


const New = ({title, dateCreated, content, keywords, onEdit}) => {

    const [isEditMode, setIsEditMode] = useState(false);
    
    const handleToggleEdit =()=> {
        setIsEditMode(!isEditMode)
    }

    const handleSubmit =(event)=> {
        event.preventDefault();
        onEdit({
            title: event.target["title"].value,
            content: event.target["content"].value,
        })
        handleToggleEdit();
   
    };

    if(isEditMode) {
        return <div>
            <h2>Edit {title}</h2>
            <form onSubmit={handleSubmit}>
                title: 
                <br/>
                <input type="text" name="title" defaultValue={title} />
                <br/>
                content:
                <br/>
                <textarea type="text" name="content" defaultValue={content} />
                <br/>
                <button type="submit">Save</button>
                <button onClick={handleToggleEdit}>Close</button>
            </form>

            </div>
    }
    
    return <div className="new">
        <h2>
            {title}, {dateCreated}
        </h2>
        <p>
            {content}
        </p>
            Keywords:
        <ul>
            {keywords.map(x=><li>{x}</li>)}
        </ul>
        <button onClick={handleToggleEdit}>Edit</button>
    </div>
}

export default New;