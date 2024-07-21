const runProcess = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
        document.querySelector('#user-name').textContent = json.title; // Use json.title instead of data.name
        document.querySelector('#user-email').textContent = json.userId; // Change this to an appropriate property
    } catch (error) {
        console.log(error);
    }
};

runProcess();


//FETCHING DATA FROM THE API //


//How to Send a GET Request Using the Fetch API//


// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(data => {
//   document.querySelector('#user-name').textContent = data.name
//   document.querySelector('#user-email').textContent = data.email
// })

    //How to Send a POST Request Using the Fetch API//

//POST Request: A method used to send data to a server,
// often used for submitting forms or uploading files.

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST', // Set method here
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'Nathan Sebhastian',
//       email: 'ns@mail.com'
//     }),
//   }).then(response => response.json())
//     .then(data => console.log(data))


//How to Use Async/Await With the Fetch API

