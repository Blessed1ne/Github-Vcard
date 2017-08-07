let ulNode = document.querySelector("ul")
console.log(ulNode);

let imgNode = document.querySelector(".pic")
console.log(imgNode);

let req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/Blessed1ne');
req.addEventListener("load", githubVcard);
req.send();



//  display function
function githubVcard () {
  // Parse response text
  let data = JSON.parse(this.responseText);

  let dataString = `
    <li>${data.name}</li>
    <li>${data.html_url}</li>
    <li>${data.email}</li>
    <li>${data.company}</li>
    <li>${data.blog}</li>
  `
    ulNode.innerHTML = dataString

    imgNode.innerHTML = `<img src =${data.avatar_url}>`
}
