import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter , Link , Route } from 'react-router-dom' 
import Bank from "./bank";
import Create from "./account";
import Deposit from "./deposit";
import Credit from "./credit";
import Data from "./data"
import userContext from "./context";
export default function App()
{
  return(
    <HashRouter>
      <div className="route">
        <Link to ="/bank" className="height"><b>Bank</b></Link>
        <Link to ="/account"className="height"><b>Create</b></Link>
        <Link to ="/deposit" className="height"><b>Deposit</b></Link>
        <Link to ="/credit" className="height"><b>Credit</b></Link>
        <Link to ="/data" className="height"><b>Data</b></Link>
        </div>
        <div>
        <userContext.Provider value={{users:[{name:"karan",email:"karanrajas2000@gmail.com",balance:10}]}}   >    
        <Route path="/bank" exact component= {Bank}/>
        <Route path="/account" exact component= {Create}/>
        <Route path="/deposit" exact component= {Deposit}/>
        <Route path="/credit" exact component= {Credit}/>
        <Route path="/data" exact component= {Data}/>
        </userContext.Provider>
      </div>
      
    </HashRouter>
  )
}
