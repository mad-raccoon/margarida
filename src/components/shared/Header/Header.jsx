import "./Header.css"

const Header =({hasLogout, onLogout})=> {
    return <div className="header">i am header
   {hasLogout && <button onClick={onLogout}>Logout</button>}
    <ul>
    <li>PT</li>
    <li>EN</li>
    </ul>
    </div>
}

export default Header;