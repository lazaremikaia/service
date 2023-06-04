import "./Imageprops.css"

function Serviceinfo(props) {
   
    return (
        <div className="image-wrapper">
            <div className="img-container">
               <a href=""><img className="image-box" src={props.image} alt="" /></a>
            </div>
            <p className="title">{props.text}</p>
        </div>
    )
    
}


export default Serviceinfo