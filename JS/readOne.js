function getOne(id){
    fetch('http://jsonplaceholder.typicode.com/posts/'+id)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then(function(data) {
            console.log("DATA: ",data);
            document.getElementById("inputUserID").value=data.userId;
            document.getElementById("inputID").value=data.id;
            document.getElementById("inputTitle").value=data.title;
            document.getElementById("inputBody").value=data.body;
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
    
      });
}
    
    const params = new URLSearchParams(window.location.search);
    
    for(const param of params){
      console.log(param);
      let x=param[0]
      console.log(x)
      getOne(x)
    }
    
    let table = document.querySelector("table");