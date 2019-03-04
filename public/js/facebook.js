function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function getUserData() {
  return JSON.parse(localStorage.getItem( 'userData' ));    
}

function storeUserData(obj) {
    localStorage.setItem( 'userData', JSON.stringify(obj) );
}

function setUpUserData() {
  var userData = {
    name: 'Johnny AppleSeed',
    goal: 'Lose Weight',
    profilePic: '/images/lorempixel.people.2.jpeg',
    appMeasurement: 'kg',
    graphType: 'line',
    customWorkoutFilters: [] 
  }
  
  return userData;
}

//Add this callback at bottom of facebook.js and add the required functionality in it 
function changeUser(response) {
  var userData = setUpUserData();
  var profileImg = response.picture.data.url;
  var name = response.name;
  if(name == null) {
    name = 'Johnny';
  }
  if(profileImg == null) {
    profileImg = '/images/lorempixel.abstract.1.jpeg';
  }
  console.log(profileImg);
  userData.profilePic = profileImg;
  userData.name = name;
  storeUserData(userData);
  console.log(getUserData());
  window.location.href = '/index';

}