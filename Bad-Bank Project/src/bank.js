// import "./App.css";
// import img from "../src/images/img.png";
import pic from "../src/images/img-org.jpg";

export default function Bank(){
    return(
        <>
        
        <div className="color">
            
        <marquee ><h1><b>Welcome To Canara Bank</b></h1></marquee>
        {/* <img className="bank" src={img} alt="logo" /> */}
        {/* <img className="logo" src={logo} alt="logo" /> */}
        {/* <img className="bank" src={img}alt="myimg" ></img> */}
        <img className="img" src={pic} alt="mypic"></img>
        

        </div>
        </>
    )
}