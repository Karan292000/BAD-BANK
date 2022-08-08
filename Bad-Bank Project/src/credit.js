import "./App.css";
import {useState} from "react";
import userContext from "./context";
import {useContext} from "react";
import image1 from "../src/images/img-2.jpg"
// import image2 from "../src/img-2.jpg"


export default function Credit(){

    let ctxBal=useContext(userContext)
    let len=ctxBal.users.length;

    const[value,setValue]=useState()
    const[amount,setAmount]=useState(ctxBal.users[len-1].balance)

    const[status,setStatus]=useState()

    const withdrawal=()=>{
        if(value<amount) setAmount(ctxBal.users[len-1].balance-value)
        else{
            alert("Your Account Balance Is Insufficient")
        }
    }
    ctxBal.users[len-1].balance=amount
    return(
    <>
    <section className="depo">
    <form className="depos">  
        <h1>Your Account balance is ${amount}</h1>
    <label>{status}{}

        <input type="number" onChange={(e)=>setValue (Number(e.target.value))}/>

        <input type="button" value="Withdraw" disabled={!value} onClick={withdrawal}/>

    </label>
    </form>
    
        <img className="image5" src={image1} alt="myimg"></img>
        {/* <img className="image2" src={image2} alt="myimag"></img> */}
        </section>
    </>
    )
}