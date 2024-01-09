import '../scss/style.scss'

const btn = document.getElementById("btn");
 let result = document.getElementById("result");
 const API = "https://api.thecatapi.com/v1/images/search?limit=10"
 let response;

 function getImages(){
  function clearRequest(){
         result.innerHTML = "";
       }
   function makeRequest(){
      clearRequest();
       fetch(API)
       .then(res=>{
         return res.json();
        })
       .then((data)=>{
          response = data;
           createGalery();
        }
       )
       .catch((error)=>console.error("Error:", error))
   }
   
   function createGalery(){
     response.forEach((elem, index) => {
       const imgTamplate = `<div class="image" style="background-image:url(${elem.url})"></div>`;
       result.innerHTML += imgTamplate;
     })
   }
   
  btn.addEventListener("click", makeRequest);
 }

 document.addEventListener("DOMContentLoaded", getImages);