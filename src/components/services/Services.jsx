import "./Services.css"
import Serviceinfo from "./imageprops/Imageprops"
import Serviceimage1 from "./images/image1.png"
import Serviceimage2 from "./images/image2.png"
import Serviceimage3 from "./images/image3.png"
import Serviceimage4 from "./images/image4.png"

function Service() {
    return(

        <div className="service-wrapper">
            <div className="service-container">
                
                <Serviceinfo image={Serviceimage2} />
                <Serviceinfo image={Serviceimage3} />
                <Serviceinfo image={Serviceimage4} />
                <Serviceinfo image={Serviceimage1}/>
                <Serviceinfo image={Serviceimage2} />
                <Serviceinfo image={Serviceimage3} />
                <Serviceinfo image={Serviceimage1}/>
                <Serviceinfo image={Serviceimage3} />
                
            </div>
        </div>
    )
    
}

export default Service