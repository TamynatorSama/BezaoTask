import "../style/card.css"

const Card =(props)=>{
    return(
        <div className="content--holder">
                <img className="main--image" src={props.image}/>
                <div className="custom--grp">
                <img onClick={()=>props.del(props.id)} className="del" src="./images/ep_delete.svg"></img>
            </div>
            <div className="text">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h5>{props.price}</h5>
            </div>
        </div>
    )
}
export default Card