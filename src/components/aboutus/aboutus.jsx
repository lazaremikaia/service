import "./aboutus.css"
import Aboutusimg from "../aboutus/aboutusbackground.png"
import Meetingimg from "../aboutus/images/meetinimg.png"



function Aboutus() {
    return (
        <div className="aboutus-wrapper">
            <img src={Aboutusimg} alt="" />
            <div className="aboutus-container">
            <div className="aboutusimg-wrapper"> 
            <img src={Meetingimg} alt="" />
            </div>
            <div className="title-wrapper">
                <h2>ჩვენს შესახებ</h2>
                <p className="aboutus-title">
                აქ რამე სტატია ნიის ოპტიმიზაციისთვის დღევანდელი ტექნოლოგიური განვითარების ფონზე ძალიან ბევრი სარეკლამო 
                პლატფორმა საკუთარ ალგორითმებს ცვლის და მომხმარებელს, ისევე როგორც ედვერთაიზერებს, 
                სთავაზობს უკეთეს გამოცდილებას. ალგორითმის ასეთი ცვლილებებია სწორედ ის მიზეზი, 
                რატომაც რეკლამების ოპტიმიზირება მუდმივად გჭირდებათ. ახლა კი განვიხილოთ სარეკლამო
                კამპანიების ოპტიმიზაციის ხუთი ხრიკი, რომლებიც უკეთესი უკუგების მიღებაში დაგეხმარებათ 
                .უჰიუჰუიჰიუჰოცჰოჰოიჯაოისჯცცსაოიჰცნჯცჯანციუბაციბიბიბჯაბგამარჯობა გამარჯობა გამარჯობა 
                ფდაჰნიხადუფფსხგჰფგფგხგცგფნბვგჯგჯგბვბგვჯჰგჯჰგჯჰგჰჯგ სზჰგ
                </p>
                <button >შემოგვიერთდით</button>
            </div>

            </div>

    
        </div>
    )
}
  export default Aboutus