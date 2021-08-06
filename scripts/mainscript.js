
window.onload = event => {
  scUp = this.oldScroll > this.scrollY;
  this.oldScroll = this.scrollY;
 if(this.scrollY > 186 && loaded === false){
  console.log("Here")
  firstAnimation(document.querySelector("#services .box-holdingbox"))
  loaded = true
 }
 if(this.scrollY>50){
    document.querySelector("#up-button").style.visibility = "visible"
  }
  if(this.scrollY>333){
//    console.log("Here")
    document.querySelector(".page-head").style.backgroundColor = "rgba(100,100,100,0.7)"

    
  } 
  else{
    document.querySelector(".page-head").style.backgroundColor = "transparent"
    document.querySelector("#up-button").style.visibility = "hidden"
  }
  }
loaded = false
function firstAnimation(elem){
  elem.style.top = rect.right+"px"
  console.log(rect.top, rect.right, rect.bottom, rect.left);
}
window.onscroll = function(e) {
  scUp = this.oldScroll > this.scrollY;
  this.oldScroll = this.scrollY;
 if(this.scrollY > 186 && loaded === false){
  console.log("Here")
  loaded = true
 }
 console.log(this.scrollY)
 if(this.scrollY>20){
    document.querySelector("#up-button").style.visibility = "visible"
  }
  else{
    document.querySelector("#up-button").style.visibility = "hidden"
  }
  if(this.scrollY>111){
//    console.log("Here")
    document.querySelector(".page-head").style.backgroundColor = "rgba(100,100,100,0.7)"
    
  }
  else{
    document.querySelector(".page-head").style.backgroundColor = "transparent"
  }
}
function goThere(url){
  window.location.href = url
}