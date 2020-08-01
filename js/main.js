var menuContent=document.querySelector(".header .content");

function switchMenu(){
	if(menuContent.classList.contains("showMoblieMenu")){
		menuContent.classList.remove("showMoblieMenu");
	}else{
		menuContent.classList.add("showMoblieMenu");
	}
}


document.querySelector("#menuButton").addEventListener("click",switchMenu);


var profuctTargetList=document.querySelectorAll(".list img");
var showAlbum=document.querySelector("#showAlbum");

function choosePDT(e){
	showAlbum.src=e.target.src;
}
profuctTargetList.forEach(product => {
	product.addEventListener("click",choosePDT);
	product.addEventListener("mouseover",choosePDT)
});
//profuctTargetList.forEach(product => product.addEventListener("mouseover",choosePDT));
