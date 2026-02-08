let parent=document.getElementById("parent");
let dragged=null;
parent.addEventListener("dragstart",function(event){
    if(e.target && e.target.id.startWith("div")){
		dragged=e.target;
	}
})

parent.addEventListener("dragover",function(event){
    event.preventDefault();
})

parent.addEventListener("drop",function(event){
	event.preventDefault(); 
   const target=e.target;
   if(target && target !==dragged && target.id &&target.id.startWith("div") ){
	  const draggedNext = dragged.nextElementSibling;
      const targetNext = target.nextElementSibling;
      const parentNode = dragged.parentNode;

      parentNode.insertBefore(dragged, targetNext);
      parentNode.insertBefore(target, draggedNext);
   }
})