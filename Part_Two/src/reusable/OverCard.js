import "../style/overcard.css"

const OverCard=(props)=>{
    return(
        <div className="owk">
            {props.check===true ? <div className="erroe--msg" >
                <p>Input all Field</p>
            </div>:<></>
            }
            <div className="container">
            <p>New Menu</p>
            <div className="all">
                <input value={props.newM.name} onChange={props.mainClick} name="name" placeholder="Food Name"/>
                <textarea value={props.newM.description} onChange={props.mainClick} name="description" placeholder="Description"/>
                <input value={props.newM.price} onChange={props.mainClick} name="price" placeholder="price"/>
                <input value={props.newM.image} onChange={props.mainClick} name="image" placeholder="Image Url"/>
            </div>
            <div className="btn">
            <button onClick={props.click}>Cancel</button>
            <button onClick={props.add}>ADD</button>
            </div>
        </div>
        </div>
    )
}
export default OverCard