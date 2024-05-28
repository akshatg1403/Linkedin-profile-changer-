var newProfilePic = 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/change-linkedin-profile-picture.jpg';

// Function to change profile pictures
function changeProfilePictures() {
    var profilePics = document.querySelectorAll('.ivm-view-attr__img--centered, .feed-shared-actor__avatar, .presence-entity__image, .my-profile-picture');
    profilePics.forEach(function(pic) {
      pic.src = newProfilePic;
    });
  }

setInterval(changeProfilePictures, 3000);