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
                <Serviceinfo image={Serviceimage1} text = "ფართოფორმატიანი ბეჭვდა-სერვა" />
                <Serviceinfo image={Serviceimage2} text = "მოცულობითი ასოები" />
                <Serviceinfo image={Serviceimage3} text = "მანათობელი ყუთები"/>
                <Serviceinfo image={Serviceimage4} text = "სტენდები და კუნძულები "/>
                <Serviceinfo image={Serviceimage1} text = "ბანერები კონსტრუქციით"/>
                <Serviceinfo image={Serviceimage2} text = "ინტერიერის და ექსტერიერის გაფორმა"/>
                <Serviceinfo image={Serviceimage3} text = "სტუდიების მოწყობა"/>
                <Serviceinfo image={Serviceimage4} text = "ღონისძიებების დეკორაცია"/>
                <Serviceinfo image={Serviceimage1} text = "გათამაშების დოლურები"/>
                <Serviceinfo image={Serviceimage2} text = "ნეონის ასოები"/>
                <Serviceinfo image={Serviceimage3} text = "სარეკმალო პილონები და სტელები"/>
                <Serviceinfo image={Serviceimage4} text = "მიმღები მაგიდები "/>
                <Serviceinfo image={Serviceimage1} text = "ავტომობილების გაფორმება"/>
                <Serviceinfo image={Serviceimage2} text = "ტრიბუნები"/>
                <Serviceinfo image={Serviceimage3} text = "დეკორატიული ნამუშვერები"/>
                <Serviceinfo image={Serviceimage4} text = "საგამოფენო კუთხეები"/>
                <Serviceinfo image={Serviceimage1} text = "ბრიფინგის სივრცეები"/>
                <Serviceinfo image={Serviceimage2} text = "ბილბორდები " />
                <Serviceinfo image={Serviceimage3} text = "სანავიგაციო მაჩვენებლები"/>
                <Serviceinfo image={Serviceimage4} text = "აბრები"/>
                <Serviceinfo image={Serviceimage1} text = "გერბები"/>
                <Serviceinfo image={Serviceimage2} text = "ბდენდირებული დროშები" />
                <Serviceinfo image={Serviceimage3} text = " დიზაინი"/>
                <Serviceinfo image={Serviceimage4} text = "მაისურებზე და ტექსტილზე ბეჭვდა"/>
                <Serviceinfo image={Serviceimage1} text = "ქაღალდის პარკებზე და ჩანთებზე ბეჭვდა"/>


                
            </div>
        </div>
    )
    
}

export default Service