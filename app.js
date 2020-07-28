const button1 = document.getElementById('getText')
const button2 = document.getElementById('getJson')
const button3 = document.getElementById('getApi')

button1.addEventListener('click', getText);
button2.addEventListener('click', getJson);
button3.addEventListener('click', getAPi);

function getText(){


  fetch('api.txt')
  .then((res) => res.text())
  .then((data) => {
      console.log(data)
     document.getElementById('output').innerHTML = data;
  })
  .catch((err) => console.log(err))
}

function getJson(){
  fetch('users.json')
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
    let output = '<h2>Users</h2>';
    data.forEach(function(user){
      output += `
        <ul>
          <li >ID: ${user.id}</li>
          <li >Name: ${user.name}</li>
          <li >Email: ${user.email}</li>
        </ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

function getAPi(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Posts</h2>';
    data.forEach(function(post){
      output += `
        <div>
          <h3>${post.id}</h3>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

