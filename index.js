console.log('Let us start over');

shownotes();

var title=document.getElementById('title');

var body=document.getElementById('body');

var button=document.getElementById('button');

button.addEventListener('click',savenotes);

function savenotes(){
  // console.log('Now I will save the notes');
  if(title.value!=""&&body.value!=""){
   var myobj=
   {
    title:title.value,
    body:body.value
   }
  //  console.log(myobj);

   var content;

   let notes=localStorage.getItem("notes");

   if(notes==null){
  //  console.log('Proceed');
   content=[];

   }
   else{

    // console.log('Difficult Phase');

    content=[];

    // console.log(typeof(JSON.parse(notes)));

    content=JSON.parse(notes);

    
    

   }
   content.push(myobj);

   localStorage.setItem("notes",JSON.stringify(content));

  //  console.log(localStorage.getItem("notes"));

   title.value="";
   body.value="";

  shownotes();


  }

}

function shownotes(){
  console.log('Project it');

  let notes=localStorage.getItem("notes");


  if(notes==null){
    console.log('Proceed');
    content=[];
 
    }
    else{
      content=[];

      
  
      content=JSON.parse(notes);
    }

  var savednotes=document.getElementById('savednotes');

  var html=""

  var temp=content.length;

  console.log(temp);

  console.log(notes);
  
  if(notes!=null&&temp!=0){

  content.forEach(function(element,index) {

    // console.log("Working");
     html+=`<div class="notes__small-title">${element.title}</div>
     <div class="notes__small-body">${element.body}</div>
     <div class="notes__small-updated">Thursday 3:30pm</div>
     <button id="${index}" onclick="deleteNote(this.id)">Delete</button>`
     
   
   });
   
   
   
    
   
   
  

 


  savednotes.innerHTML=html;



  }

  else{
    savednotes.innerHTML=`<b>No notes to show</b>`
  }

  
   
  

}
  
function deleteNote(index){
  console.log('Please work' + index);
  var notes=localStorage.getItem('notes');
  var content;
 
  if(notes==null){
    content=[];
  }
  else{
    content=[];
    console.log('I came here');
    content=JSON.parse(notes);
    console.log(content);

  }
  console.log(content.length);
  content.splice(index,1);
  console.log(content.length);

  localStorage.setItem("notes",JSON.stringify(content));


  if(notes===null){
    content=[];
  }
  else{
    content=[];
    content=JSON.parse(notes);
    

  }


  shownotes();
}
  






