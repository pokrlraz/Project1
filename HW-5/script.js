let list = []
class Show {
  constructor( pname, ptype, pstatus, prating, pURL, pID) {
    this.name = pname
    this.type = ptype
    this.status = pstatus
    this.rating = prating
    this.URL = pURL
    this.ID = pID
    this.ID = list.length + 1;
  }

  getAll() {
    return this.type + ': "' + this.name + '", ' + 'Current Status: '+ this.status +  ', Rating: ' + this.rating
  }
}



$(document).on("pagebeforeshow","#list",function() {
  showEntries()
});
//this doesn't work idk why.
// $(document).on("pagebeforeshow", "#list", function (event) {   // have to use jQuery 
//   let localID = document.getElementById("IDparmHere").innerHTML;
//   document.getElementById("name").innerHTML = "The title is: " + list[localID - 1];
//   document.getElementById("oneYear").innerHTML = "Year released: " + list[localID - 1].type;
//   document.getElementById("oneGenre").innerHTML = "Genre: " + list[localID - 1].status;
//   document.getElementById("oneWoman").innerHTML = "Leading Woman: " + list[localID - 1].rating;
 
//   document.getElementById("oneURL").innerHTML = movieArray[localID - 1].URL;
// });


function formSubmitEvent() {
  // Get name of movie and rating
  let showName = $('#showName').val();
  let type = $('#type').val();
  let status = $('#status').val();
  let rating = $('#rating').val();
  let show = new Show(showName, type, status, parseInt(rating))
  // Validate the object values?
  let result = true
  if (result) {
    // Add object to list
    list.push(show)
    
    // Set fields to blank string
  $('#showName').val('');
  } else {
    // Alert of bad values
    alert("Please fill in the fields with a valid entry.")
  }
}


function showEntries() {
  
  let parent = document.getElementById("listId")
  
    while (parent.firstChild) {    // remove any old data so don't get duplicates
        parent.removeChild(parent.firstChild);
    };
 

  list.forEach(item => {
    let li = document.createElement('li')
    li.classList.add('movieItem')
    li.setAttribute("data-parm",item.getAll())
    li.innerHTML= item.getAll()
    
    parent.append(li);
    
  })

  let liArray = document.getElementsByClassName('movieItem')
  Array.from(liArray).forEach(function (item) {
    item.addEventListener('click', function () {
    
    let parm = this.getAttribute("data-parm") 
    
   
    document.getElementById("IDparmHere").innerHTML = parm;
   
        
    document.location.href = "index.html#welcome";
    });
  });
  

}










