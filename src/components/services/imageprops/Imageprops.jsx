import "./Imageprops.css"

function Serviceinfo(props) {
   
    return (
        <div className="image-wrapper">
            <a href=""><img className="image-box" src={props.image} alt="" /></a>
            <p>გათამაშების დოლურა</p>
        </div>
    )
    
}


export default Serviceinfo