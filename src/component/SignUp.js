import React from "react";
import {Link} from "react-router-dom";
// import SignIn from "./SignIn";

function SignUp(){
    return(
        <div>
        <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <button  type="submit" class="btn btn-primary">Register</button><br/>
    <p>Already have a account?</p>
    <Link to="/signin" type="submit" class="btn btn-primary">Login</Link>
  </form>
      </div>
    )
}

export default SignUp;