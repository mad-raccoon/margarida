

const Project = ({title, dateCreated, content, isVisible}) => {
    return <div className="project">
        <h2>
            {title}, {dateCreated}
        </h2>
        <p>
            {content}
        </p>
    </div>
}

export default Project;