import "./App.css";
import { useContext } from "react";
import userContext from "./context";



export default function Data(){
    let userCtx=useContext(userContext)
    return(
        <>
        <section className="data">
            
                        
            
            <marquee className="col"><h1><b>User Details</b></h1></marquee>

                <table>
                    <tbody>
                        <tr className="trow">
                            <td>Name</td>
                            <td>Email</td>
                            <td>Balance</td>
                        </tr>
                        {userCtx.users.map((item,i)=>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.balance}</td>
                        </tr>)}
                    </tbody>
                </table>
            
        </section>
        </>
    )
}