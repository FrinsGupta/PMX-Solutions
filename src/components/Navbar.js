import React from 'react'

function Navbar() {
  return (
    <>
     <nav>
        <div class="left">
            <p>PROXIMATE SOLUTIONS</p>
        </div>
        <div class="right">
            <ul>
                <li><a href="" >Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Princing</a></li>
                <li id='login'><a href="" >Login</a></li>
                <li id='sign'><a href="" style={{color:'orange'}}>Sign Up</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
// style={{color:'orange'}}

export default Navbar
