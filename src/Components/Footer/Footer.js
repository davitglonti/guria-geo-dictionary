import React from 'react'
import './Footer.css'
import { GrFacebookOption, GrYoutube,GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
   

<footer class="footer">

  <div class="container p-4 pb-0">
  
    <section class="mb-4">
 
     

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"> <GrFacebookOption/>
      </a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GrYoutube/></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GrInstagram/></a>
    </section>
   
  </div>
 

 
  <div class="text-center p-3" >
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>
  )
}

export default Footer