var list = document.getElementById("list")

firebase.database().ref('todo').on('child_added',function(data){


  
  var li = document.createElement("li")
    
  var litext = document.createTextNode(data.val().value)
  
  li.appendChild(litext)
  
  li.setAttribute("class", "li")
 




  input.value = ""
  
  

//    delet li
var lidelet = document.createElement("button")
var lideletText = document.createTextNode("DELET TEXT")
lidelet.appendChild(lideletText)
lidelet.setAttribute("class", "btn")
lidelet.setAttribute("id",data.val().key)
lidelet.setAttribute("onclick", "deletli(this)")
li.appendChild(lidelet)
list.appendChild(li)
// Edit btn
var editbtn = document.createElement("button")
var editText = document.createTextNode("Edit Text")
editbtn.appendChild(editText)

editbtn.setAttribute("class", "editbtn")
editbtn.setAttribute("id",data.val().key)
editbtn.setAttribute("onclick", "edit(this)")

li.appendChild(editbtn)
list.appendChild(li)


var time = new Date() 
var date = time.toLocaleDateString()
var dtime = time.toLocaleTimeString()
var date_time = dtime+ " " +date
 
var ptime = document.createElement("p")
ptime.setAttribute("class","time")
ptime.innerHTML = date_time

li.appendChild(ptime)

list.appendChild(li)

  
})


function add() {
    var input =  document.getElementById("input")
    var database =  firebase.database().ref('todo')
    var key = database.push().key;
   var todo = {
     value : input.value,
     key : key
   }
    database.child(key).set(todo)

}





function edit(e){
  var edit = prompt("Edit Text", e.parentNode.firstChild.nodeValue)
  var edit_todo = {
  value : edit ,
  key : e.id
  }
  firebase.database().ref('todo').child(e.id).set(edit_todo)
  e.parentNode.firstChild.nodeValue = edit
}

function deletli(e){
   firebase.database().ref('todo').child(e.id).remove()
  e.parentNode.remove()
   
 
}

function deletAll(){
  firebase.database().ref('todo').remove()
  
  list.innerHTML= ''
}