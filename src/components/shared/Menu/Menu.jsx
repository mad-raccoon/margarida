import "./Menu.css"


const Menu = ({ items = [], onClick }) => {
    const handleItemClick = (item) => {
        onClick(item);
        // console.log(item);
    }


    return <div className="menu">
        <ul>
         {items.map(item => <li key={item} onClick={() => handleItemClick(item)}>{item}</li>)}
        </ul>

    </div>
}

export default Menu;