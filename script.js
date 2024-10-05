
function fetchUserData() {
    const url = 'https://randomuser.me/api/'; 

    
    fetch(url)
        .then(response => {
           
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
          
            const user = data.results[0]; 
            const userName = `${user.name.first} ${user.name.last}`; 
            const userEmail = user.email; 

            document.getElementById('name').textContent = `Name: ${userName}`;
            document.getElementById('email').textContent = `Email: ${userEmail}`;
        })
        .catch(error => {
            
            document.getElementById('name').textContent = 'Error fetching user data.';
            document.getElementById('email').textContent = error.message; 
        });
}


document.getElementById('fetchButton').addEventListener('click', fetchUserData);
