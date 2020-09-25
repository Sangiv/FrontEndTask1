fetch('http://jsonplaceholder.typicode.com/posts')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log("here is my data",data);
        let table = document.querySelector("table");
        let dataHead = Object.keys(data[0]);

        generateTableHead(table, dataHead);
        generateTable(table, data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  function generateTableHead(table, dataHead) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of dataHead) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      
      th.appendChild(text);
      row.appendChild(th);
    }

    let thEdit = document.createElement("th");
    let textEdit = document.createTextNode("Edit");
    thEdit.appendChild(textEdit);
    row.appendChild(thEdit);

    let thDel =document.createElement("th");
    let textDel =document.createTextNode("Delete")
    thDel.appendChild(textDel)
    row.appendChild(thDel)
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }

      let cellEdit = row.insertCell();
      let textEdit = document.createElement("a");
      textEdit.innerHTML=("View")
      textEdit.className= ("btn btn-info")
      textEdit.href="readOne.html?"+element.id
      cellEdit.appendChild(textEdit);

      let cellDel = row.insertCell();
      let textDel = document.createElement("a");
      textDel.innerHTML=("Delete")
      textDel.className= ("btn btn-danger")
      textDel.href= "delete.html"+element.id
      cellDel.appendChild(textDel)
    }
  }
  
  // const params = new URLSearchParams(window.location.search);
  
  // console.log(params)
  
  // for(const param of params){
  //   console.log(param);
  // }