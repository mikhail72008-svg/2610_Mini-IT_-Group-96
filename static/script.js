const STATIC = "/static/Images/";
const facilityData = {
  foe: {
    title: "Faculty of Engineering (FOE)",
    description: "Engineering faculty building and surrounding learning spaces. This building is also known as FAIE (Faculty of Artifical Intelligence & Engineering).",
    images: ["images/foe.jpg", "images/foe2.jpg", "images/foe3.jpg"],
    captions: ["Main Engineering Faculty Building", "Main Entrance", "FOE Directory"]
  },
  fci: {
    title: "Faculty of Computing & Informatics (FCI)",
    description: "Computing and informatics faculty area for classes, labs, and student activities.",
    images: ["images/fci.jpg", "images/fci2.jpg", "images/fci3.jpg", "images/fci4.jpg", "images/fci5.png"],
    captions: ["Main Computing Faculty Building", "Main Entrance", "FCI Theatre", "Classes of CQCR:2001-2004 (2ND FLOOR) CQCR:3001-3004 (3RD FLOOR) could be accessed with these stairs", "FCI Directory"]
  },
  fom: {
    title: "Faculty of Management (FOM)",
    description: "Management faculty building for business, accounting, and management programs.",
    images: ["images/fom.jpg", "images/fom2.jpg", "images/fom3.jpg", "images/fom4.png"],
    captions: ["Main Management Faculty Building", "FOM Building", "Main Entrance", "FOM Directory"]
  },
  fcm: {
    title: "Faculty of Creative Media (FCM)",
    description: "Creative media faculty space for design, animation, and multimedia learning.",
    images: ["images/fcm.jpg", "images/fcm2.jpg"],
    captions: ["Main Creative Media Faculty Building", "FCM Directory"]
  },
  stad: {
    title: "Students Affairs Division (STAD)",
    description: "Student support office for campus services, activities, and student matters.",
    images: ["images/stad.jpg", "images/stad2.jpg", "images/stad(ess).jpg"],
    captions: ["Main Student Services Building", "Main Entrance", "STAD Directory"]
  },
  dtc: {
    title: "Dewan Tun Canselor (DTC)",
    description: "Main hall used for official events, ceremonies, and large campus gatherings.",
    images: ["images/dtc.png", "images/dtc2.png"],
    captions: ["Grand Hall for Ceremonies", "Main Auditorium Interior"]
  },
  chancellery: {
    title: "MMU Chancellery",
    description: "Administrative building for university management and official offices.",
    images: ["images/chancellery.png"],
    captions: ["Administrative Headquarters Building"]
  },
  fmd: {
    title: "Facilities Management Department (FMD)",
    description: "Facilities office that manages campus maintenance and infrastructure services.",
    images: ["images/fmd.jpg"],
    captions: ["Facilities Management Center"]
  },
  isc: {
    title: "Indoor Sports Center (ISC)",
    description: "Indoor sports venue for games, training, and student recreation.",
    images: ["images/isc.jpg", "images/isc2.jpg"],
    captions: ["Indoor Basketball and Multi-Sport Courts", "GYM"]
  },
  clc: {
    title: "Common Lecture Complex (CLC)",
    description: "Shared lecture complex used for classes and academic sessions.",
    images: ["images/clc.jpg"],
    captions: ["Lecture Halls and Classroom Complex"]
  },
  library: {
    title: "Siti Hasmah Digital Library",
    description: "Campus library with study areas, digital resources, and academic references.",
    images: ["images/library.jpg", "images/Library2.png", "images/library3.png"],
    captions: ["Main Library Entrance", "Library", "Learning Point"]
  },
  stadium: {
    title: "MMU Stadium",
    description: "Outdoor stadium for sports events, training, and campus activities.",
    images: ["images/stadium.jpg", "images/Stadium2.png"],
    captions: ["Main Stadium Entrance", "Athletic Track and Field Facilities"]
  },
  pool: {
    title: "Swimming Pool",
    description: "Swimming facility for recreation, training, and aquatic activities.",
    images: ["images/Swimmingpool2.jpg", "images/Swimmingpool.png"],
    captions: ["Main enterance", "Olympic-Sized Swimming Pool"]
  },
  vcourt: {
    title: "Volleyball / Takraw Court",
    description: "Outdoor court area for volleyball, sepak takraw, and casual sports.",
    images: ["images/vcourt.jpg"],
    captions: ["Volleyball and Takraw Court"]
  },
  mosque: {
    title: "Mosque",
    description: "Prayer and gathering space for Muslim students and staff.",
    images: ["images/mosque.jpg", "images/mosque2.png"],
    captions: ["Prayer Hall and Courtyard", "Mosque Main Structure"]
  },
  theatre: {
    title: "E-Theatre (Can be found in FCM building)",
    description: "Theatre venue for theatrical performances and screenings.",
    images: ["images/theatre.jpg"],
    captions: ["Theatre Auditorium and Stage"]
  },
  sbcourt: {
    title: "Squash / Badminton Court (Can be found in ISC)",
    description: "Indoor courts for squash, badminton, and student sports activities.",
    images: ["images/sbcourt.png"],
    captions: ["Indoor Squash and Badminton Courts"]
  },
  gym: {
    title: "Gym",
    description: "Fitness facility with exercise equipment for student and staff workouts (Can be found in ISC).",
    images: ["images/Gym.png", "images/Gym2.png", "images/Gym3.png"],
    captions: ["Weight Training Area", "Cardio and Aerobics Zone", "Gym Facilities Overview"]
  },
  finance: {
    title: "Finance Department",
    description: "Office for finance services, payments, and related university matters. It can be found in STAD building.",
    images: ["images/stad(ess).jpg"],
    captions: ["Finance Department Office"]
  },
  sad:{
    title: "Student Affairs Department (SAD)",
    description: "Department that supports student welfare, activities, and campus life. It can be found in STAD building.",
    images: ["images/stad(ess).jpg"],
    captions: ["Student Affairs Department"]
  },
  pu:{
    title: "Procurement unit (PU)",
    description: "Office handling procurement, purchasing, and supplier-related services. It can be found in STAD building.",
    images: ["images/stad(ess).jpg"],
    captions: ["Procurement Unit Office"]
  },
  cynergy:{
    title: "MMU Cynergy",
    description: "Campus center supporting entrepreneurial, business, or innovation initiatives.",
    images: ["images/cynergy.jpg"],
    captions: ["Cynergy Innovation Center"]
  },
  edc:{
    title: "Entrepreneurship Development Center (EDC)",
    description: "Center for entrepreneurship programs, startup support, and business development.",
    images: ["images/edc.jpg"],
    captions: ["Entrepreneurship Development Center"]
  },
  itsd:{
    title: "Information Technology Service Division (ITSD)",
    description: "IT service office for campus systems, technical support, and digital services. It can be found in FCM building.",
    images: ["images/fcm.jpg", "images/fcm2.jpg"],
    captions: ["FCM building", "Directory"]
  },
  ips:{
    title: "Institute of Postgraduate Studies (IPS)",
    description: "Institute supporting postgraduate admissions, study matters, and research students.",
    images: ["images/ips.jpg"],
    captions: ["Institute of Postgraduate Studies"]
  },
  eru:{
    title: "Examination & Record Unit (ERU)",
    description: "Office for examination records, academic documents, and student record services.",
    images: ["images/ips.jpg"],
    captions: ["Examination & Records Office"]
  },  
  hrm:{
    title: "Human Resource Management (HRM)",
    description: "Human resource office for staff services and employment-related support. It can be found in chancellery building.",
    images: ["images/chancellery.png"],
    captions: ["Human Resource Management Department"]
  },
  gsom:{
    title: "Graduate School of Management (GSOM)",
    description: "Graduate school area for management programs and postgraduate learning. It can be found in chancellery building.",
    images: ["images/chancellery.png"],
    captions: ["Graduate School of Management"]
  },
  io:{
    title: "International Office (IO)",
    description: "Office supporting international students, mobility programs, and global partnerships. It can be found in chancellery building.",
    images: ["images/chancellery.png"],
    captions: ["International Office"]
  },
  bu:{
    title: "Business Unit (BU)",
    description: "Business unit office for university services and operational support. It can be found in chancellery building.",
    images: ["images/chancellery.png"],
    captions: ["Business Unit Office"]
  },
};

// MMU map images of facilities
function openGallery(facilityKey) {

  const data = facilityData[facilityKey];

  if (!data){
      alert("Facility not found.");
      return;
  }
  document.getElementById('galleryTitle').innerText = data.title;
  
  const container = document.getElementById('imageContainer');
  container.innerHTML = '';

  // Description at the left of the gallery
  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'gallery-description';
  descriptionDiv.style.display = 'flex';
  descriptionDiv.style.alignItems = 'center';
  descriptionDiv.style.justifyContent = 'center';
  descriptionDiv.style.textAlign = 'center';
  descriptionDiv.style.marginBottom = '20px';
  descriptionDiv.style.borderRadius = '8px';
  descriptionDiv.style.padding = '50px';
  descriptionDiv.style.height = '500px';
  descriptionDiv.style.boxSizing = 'border-box';
  descriptionDiv.style.fontSize = '1.1em';
  descriptionDiv.style.color = '#333';
  descriptionDiv.style.backgroundColor = '#008cff';
  descriptionDiv.textContent = data.description;
  container.appendChild(descriptionDiv);

  // Images on the right of the gallery and their captions
  data.images.forEach((src, index) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = STATIC + src.split('/').pop();
    img.alt = data.title;
    if (src.includes('fci5.png') || src.includes('fom4.png')) {
      img.style.height = '200px';
      img.style.marginTop = '290px';
    }

    const caption = document.createElement('figcaption');
    caption.textContent = data.captions && data.captions[index] ? data.captions[index] : data.description;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
  });

  document.getElementById('galleryModal').style.display = "block";
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = "none";
}

const openEditProfileButton = document.getElementById('openEditProfile');
const editProfileModal = document.getElementById('editProfileModal');
const closeEditProfileButton = document.getElementById('closeEditProfile');
const saveEditProfileButton = document.getElementById('saveEditProfile');

if (openEditProfileButton && editProfileModal && closeEditProfileButton) {
  openEditProfileButton.addEventListener('click', () => {
    editProfileModal.classList.add('show');
  });

  closeEditProfileButton.addEventListener('click', () => {
    editProfileModal.classList.remove('show');
  });

  editProfileModal.addEventListener('click', (event) => {
    if (event.target === editProfileModal) {
      editProfileModal.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      editProfileModal.classList.remove('show');
    }
  });
}

if (saveEditProfileButton) {
  saveEditProfileButton.addEventListener('click', () => {
    document.getElementById('profileName').textContent = document.getElementById('editName').value;
    document.getElementById('profileBio').textContent = document.getElementById('editBio').value;
    editProfileModal.classList.remove('show');
  });
}

// Profile Picture Selection
const profileAvatar = document.querySelector('.profile-avatar');
const profilePicModal = document.getElementById('profilePicModal');
const closeProfilePicModal = document.getElementById('closeProfilePicModal');
const profilePicOptions = document.querySelectorAll('.profile-pic-option');

if (profileAvatar && profilePicModal && closeProfilePicModal) {
  profileAvatar.addEventListener('click', () => {
    profilePicModal.classList.add('show');
  });

  closeProfilePicModal.addEventListener('click', () => {
    profilePicModal.classList.remove('show');
  });

  profilePicModal.addEventListener('click', (event) => {
    if (event.target === profilePicModal) {
      profilePicModal.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      profilePicModal.classList.remove('show');
    }
  });
}

if (profilePicOptions.length > 0) {
  profilePicOptions.forEach(option => {
    option.addEventListener('click', () => {
      const newSrc = option.getAttribute('data-src');
      profileAvatar.src = "/static/Images/" + newSrc.split('/').pop();
      profilePicModal.classList.remove('show');
    });
  });
}

// Post Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Grab the elements
  const createPostBtn = document.getElementById('createPostBtn');
  const postModalOverlay = document.getElementById('postModalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const composerPostButtons = document.querySelectorAll('.composer-post-btn');

  if (!createPostBtn || !postModalOverlay || !closeModalBtn) {
    return;
  }

  const openPostModal = () => {
    postModalOverlay.classList.remove('hidden');
    postModalOverlay.querySelector('textarea').focus();
  };

  // 1. Show modal when the blue plus icon is clicked
  createPostBtn.addEventListener('click', openPostModal);

  composerPostButtons.forEach((button) => {
    button.addEventListener('click', openPostModal);
  });

  // 2. Hide modal when the 'X' is clicked
  closeModalBtn.addEventListener('click', () => {
    postModalOverlay.classList.add('hidden');
  });

  // 3. Hide modal when clicking the dark background outside the box
  postModalOverlay.addEventListener('click', (event) => {
    if (event.target === postModalOverlay) {
      postModalOverlay.classList.add('hidden');
    }
  
});

// 4. Submit a new post
const submitPostBtn = document.querySelector('.post-submit-btn');
const postTextarea = postModalOverlay.querySelector('textarea');

submitPostBtn.addEventListener('click', async () => {

    const content = postTextarea.value.trim();

    if (content === "") {
        alert("Please enter something before posting.");
        return;
    }

    try {

        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            content: content
          })  
        });

        const result = await response.json();

        alert(result.message);

        postTextarea.value = "";
        postModalOverlay.classList.add("hidden");

        location.reload();

    } catch (error) {
        console.error(error);
        alert("Unable to create post.");
    }

});

});
// Search Button Functionality
const searchPageBtn = document.getElementById('searchBtn');

if (searchPageBtn) {
    searchPageBtn.addEventListener('click', () => {
        window.location.href = '/Search.html';
    });
}

// Search Page Functionality
const searchInput = document.getElementById('searchInput');
const performSearchBtn = document.getElementById('performSearchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchResults = document.getElementById('searchResults');

// =========================
// LOGIN FUNCTIONALITY
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const message = document.getElementById("loginMessage");

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
    email: email,
    password: password
})
            });

            const data = await response.json();

            if (data.status === "success") {
                message.style.color = "green";
                message.textContent = "Login successful!";

                setTimeout(() => {
                    window.location.href = "/Homepage.html";
                }, 800);

            } else {
                message.style.color = "red";
                message.textContent = data.message;
            }

        } catch (error) {
            message.style.color = "red";
            message.textContent = "Server connection failed.";
            console.error(error);
        }
    });
}
// =========================
// REGISTER FUNCTIONALITY
// =========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function(e){

        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const message = document.getElementById("registerMessage");

        try{

            const response = await fetch("/api/register",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    username:username,
                    email:email,
                    password:password

                })

            });

            const data = await response.json();

            if(data.status==="success"){

                message.style.color="green";
                message.textContent=data.message;

                setTimeout(()=>{

                    window.location.href="/login.html";

                },1000);

            }else{

                message.style.color="red";
                message.textContent=data.message;

            }

        }catch(error){

            message.style.color="red";
            message.textContent="Unable to connect to server.";

            console.error(error);

        }

    });

}
// =========================
// LIKE BUTTON
// =========================

document.querySelectorAll(".like-btn").forEach(button => {

    button.addEventListener("click", async () => {

        const postId = button.dataset.postId;

        try {

            const response = await fetch("/api/likes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                post_id: postId
              })
            });

            const result = await response.json();

const likeResponse = await fetch(`/api/likes/${postId}`);
const likeData = await likeResponse.json();

button.querySelector(".like-count").textContent = likeData.likes;

const icon = button.querySelector("i");

if (result.message === "Post liked") {
    icon.classList.remove("bi-heart");
    icon.classList.add("bi-heart-fill");
}
else if (result.message === "Post unliked") {
    icon.classList.remove("bi-heart-fill");
    icon.classList.add("bi-heart");
}

// alert(result.message);

        } catch (error) {
            console.error(error);
            alert("Unable to like post.");
        }

    });

});
document.querySelectorAll(".delete-btn").forEach(button => {

    button.addEventListener("click", async () => {

        const postId = button.dataset.postId;

        const confirmDelete = confirm("Delete this post?");

        if (!confirmDelete) {
            return;
        }

        try {

            const response = await fetch(`/api/posts/${postId}`, {
                method: "DELETE"
            });

            const result = await response.json();

            alert(result.message);

            // Remove the post from the page
            button.closest(".feed-post").remove();

        } catch (error) {

            console.error(error);
            alert("Unable to delete post.");

        }

    });

});
// =========================
// Comment Modal
// =========================

const commentModal = document.getElementById("commentModal");
const closeCommentModal = document.getElementById("closeCommentModal");
const submitCommentBtn = document.getElementById("submitComment");

let currentPostId = null;

if (commentModal && closeCommentModal && submitCommentBtn) {

    // Open modal
    document.querySelectorAll(".comment-btn").forEach(button => {

        button.addEventListener("click", async () => {

            currentPostId = button.dataset.postId;

            commentModal.classList.remove("hidden");

            const response = await fetch(`/api/comments/${currentPostId}`);
            const comments = await response.json();

            const commentsList = document.getElementById("commentsList");
            commentsList.innerHTML = "";

            comments.forEach(comment => {

                commentsList.innerHTML += `
                    <div class="comment-item">

                        <div>
                            <strong>${comment[1]}</strong><br>
                            ${comment[2]}
                        </div>

                        <button
                            class="delete-comment-btn"
                            data-comment-id="${comment[0]}">
                            <i class="bi bi-trash3"></i>
                        </button>

                    </div>
                `;

            });

            // Delete comment
            document.querySelectorAll(".delete-comment-btn").forEach(btn => {

                btn.addEventListener("click", async () => {

                    if (!confirm("Delete this comment?")) return;

                    const response = await fetch(
                        `/api/comments/${btn.dataset.commentId}`,
                        {
                            method: "DELETE"
                        }
                    );

                    const result = await response.json();

                    btn.closest(".comment-item").remove();

                    const count = document.querySelector(
                        `.comment-btn[data-post-id="${currentPostId}"] .comment-count`
                    );

                    count.textContent = Number(count.textContent) - 1;

                });

            });

        });

    });

    // Close modal
    closeCommentModal.addEventListener("click", () => {
        commentModal.classList.add("hidden");
    });

    commentModal.addEventListener("click", (e) => {

        if (e.target === commentModal) {
            commentModal.classList.add("hidden");
        }

    });

    // Add comment
    submitCommentBtn.addEventListener("click", async () => {

        const text = document.getElementById("commentText").value.trim();

        if (text === "") return;

        const response = await fetch("/api/comments", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                post_id: currentPostId,
                comment: text
            })

        });

        await response.json();

        document.getElementById("commentText").value = "";

        const count = document.querySelector(
            `.comment-btn[data-post-id="${currentPostId}"] .comment-count`
        );

        count.textContent = Number(count.textContent) + 1;

        // Reload comments
        document.querySelector(
            `.comment-btn[data-post-id="${currentPostId}"]`
        ).click();

    });

}

// =========================
// Search
// =========================

console.log("Search JS loaded");

const searchBtn = document.getElementById("performSearchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", async () => {
      
      console.log("Button clicked");

        const keyword = document.getElementById("searchInput").value.trim();

        if (keyword === "") return;

        const usersResponse = await fetch(`/api/search/users/${keyword}`);
        const postsResponse = await fetch(`/api/search/posts/${keyword}`);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        const results = document.getElementById("searchResults");

        results.innerHTML = "";

        // Users
        results.innerHTML += `<h3>Users</h3>`;

        if (users.length === 0) {
            results.innerHTML += "<p>No users found.</p>";
        }

        users.forEach(user => {

            results.innerHTML += `
                <div class="feed-post">
                    <strong>${user[1]}</strong>
                </div>
            `;

        });

        // Posts
        results.innerHTML += `<h3>Posts</h3>`;

        if (posts.length === 0) {
            results.innerHTML += "<p>No posts found.</p>";
        }

        posts.forEach(post => {

    results.innerHTML += `
        <div class="feed-post">

            <div class="feed-post-header">
                <strong>${post[1]}</strong>
            </div>

            <p>${post[2]}</p>

        </div>
    `;

});

    });

}