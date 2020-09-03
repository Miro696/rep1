// Init Github class
const github = new Github;

// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
 // Get data input
  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
       
      } else {
        // Show profile in UI

      }

    }) 
  } else{
    // Clear profile from UI

  }
}); 