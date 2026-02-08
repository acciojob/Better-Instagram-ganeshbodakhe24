let parent=document.getElementById("parent");
let child1=null;
let child2=null;
let nextChild=null;
parent.addEventListener("dragstart",function(event){
    console.log(event.target);
    child1=event.target;
    nextChild=event.target.nextSibling;
})

parent.addEventListener("dragover",function(event){
    event.preventDefault();
    child2=event.target;
    console.log(event.target);
})

parent.addEventListener("drop",function(event){
	event.preventDefault(); 
    parent.replaceChild(child1,child2);
    parent.insertBefore(child2,nextChild);
})