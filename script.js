let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObject = JSON.parse(this.responseText);
    let myRepos= myObj.repos_url
    
    ///  2nd http request begins repo array here
    
    let newRequest1 = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let myreposArray =JSON.parse(this.responseText);
          var myList ="";
          for (var i = 0; i< myreposArray.length; i++) {
          myList +- ("<li> + myreposArray[i] </li>")
        }
      
      document.getElementById("myUL").innerHTML = myList;
      }


    newRequest1.open("GET", myRepos, true);
    newRequest1.send();
  }
};

newRequest.open("GET", "https://api.github.com/users/alsharpe70/", true);
newRequest.send();