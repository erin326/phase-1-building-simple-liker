// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// document.addEventListener('DOMContentLoad', function() {

  const likeButton = document.getElementsByClassName('like-glyph');
  
  const hiddenError = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');
  

  for(const heart of likeButton) {
    heart.addEventListener('click', function(e) {
 
      mimicServerCall()
      
      .then(() => {
        
        if(heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.className = 'activated-heart';
        }else if(heart.textContent === FULL_HEART) {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart')
        }
      })

      .catch(function(error) {

        hiddenError.classList.remove('hidden')
        setTimeout(() => {
          hiddenError.classList.add('hidden');
        }, 3000);
        errorMessage.innerText = error;
        console.log(error); 
      })
  
    })
  }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
