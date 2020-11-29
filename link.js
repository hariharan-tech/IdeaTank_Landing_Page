(function() {
var next=document.getElementsByClassName('next');
var loading=1;
var id=setInterval(frame,55);

function frame(){
  if(loading==100){
    window.open("indextwo.html","_self");
  }
  else{
    loading=loading+1;
    if(loading==90){
      next.style.animation="fade 1s ease";
    }
  }
}
})();
