import "./App.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useContext } from "react";
import userContext from "./context"; 
// import img from "../src/images/create.png";


export default function Create(){

let userCtx=useContext(userContext)


const formik = useFormik({
   
  initialValues: {
      name:"",
      email: "",
      password:"",
      balance:0
    },

    onSubmit: (values) => {
      alert("Account Created")
      userCtx.users.push(values)
      console.log(values)
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password="Required"
      return errors;
    }
  });
    return(
        <>
        <section id="account">
       
        
      <div className="clr">
      
      <marquee className="mar"><h1><b>Create Account</b></h1></marquee>
      {/* <img className="image1" src={img} alt="mypic"></img> */}
      


      <form className="forms" onSubmit={formik.handleSubmit}>
       <label className="style">Name : </label>
       <input  id="name"name="name"type="text"onChange={formik.handleChange}value={formik.values.name}/><br /><br />

       <label className="style">  Email :</label>
       <input  id="email"name="email"type="email"onChange={formik.handleChange}value={formik.values.email}/><br /><br />
       {/* {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null} */}

      <label className="style" htmlFor="Password">Password:</label>
      <input id="password"name="password"type="password"onChange={formik.handleChange}value={formik.values.password}/><br></br><br />
      {/* {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null} */}

      <button type="submit">Create</button><br />
    </form>
  </div>
  </section>
        </>
    )
}