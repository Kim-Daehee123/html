let h1Text = document.getElementById("h1-text");
let h3Body = document.getElementById("h3-body");
let textArea = document.getElementById("textarea");
let textBoard = document.getElementById("text-board");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    h1Text.textContent = json.title;
    h3Body.textContent = json.body;
    textArea.textContent = json.body;
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    let resultHTML = "";
    let table = document.getElementById("table1");
    for (let i = 0; i < json.length; i++) {
      resultHTML += `<tr> <td id="td1"></a>${json[i].id}</td>
      <td id="td2"><a  href="#" >${json[i].title}</a></td>
      <td id="td3">${json[i].userId}</td> </tr>`;
    }
    table.innerHTML = resultHTML;
  });
