import "./App.css";
import ReactDOM  from 'react-dom';
import {useState} from 'react'
import userContext from "./context";
import {useContext} from "react";
import imag from "../src/images/dep.png"



export default function Deposit(){
const[status,setStatus]=useState()

let ctxBal=useContext(userContext)
let len=ctxBal.users.length;

const[value,setValue]=useState()
const[amount,setAmount]=useState(ctxBal.users[len-1].balance)



const deposit=()=>{

if(value>0) setAmount(ctxBal.users[len-1].balance+value)

else {

alert("Enter a valid amount")

}

}
ctxBal.users[len-1].balance=amount
    
    return(
<>
<section className="depo">

<form className="depos">
<h1>Your Account balance is ${amount}</h1>

    
{/* <option value="deposit"> Deposit </option> */}

<label>{status}{}

<input type="number" onChange={(e)=>setValue( Number(e.target.value))}/>

<input type="button" value="Deposit" disabled={!value} onClick={deposit}/>
</label>
</form>
        <img className="image" src={imag} alt="myimg"></img>
   
</section>
</>
    )
}