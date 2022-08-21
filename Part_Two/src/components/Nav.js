import "../style/nav.css"

const Nav=(props)=>{
    return(
        <nav>
            <div className="Logo--grp">
                <img src="./images/logo.svg" alt=""/>
                <p>Menu</p>
            </div>
            <div className="add--grp">
                <div onClick={props.click} className="top--down">
                    <img src="./images/carbon_add-alt.svg" alt=""/>
                    <p>Add Menu</p>
                </div>
                <div className="top--down">
                    <img src="./images/del.svg" alt=""/>
                    <p>Delete All</p>
                </div>
            </div>
        </nav>
    )
}
export default Nav