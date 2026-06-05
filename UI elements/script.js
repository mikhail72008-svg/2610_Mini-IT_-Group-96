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
    img.src = src;
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

// Edit Profile Modal Functionality
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
      profileAvatar.src = newSrc;
      profilePicModal.classList.remove('show');
    });
  });
}

// Function to create a new post in the feed
function createFeedPost(postText, insertAfterPost) {
  const article = document.createElement('article');
  article.className = 'feed-post';

  const avatar = document.createElement('div');
  avatar.className = 'feed-avatar avatar-blue';
  avatar.textContent = 'M';

  const body = document.createElement('div');
  body.className = 'feed-post-body';

  const header = document.createElement('div');
  header.className = 'feed-post-header';

  const name = document.createElement('strong');
  name.textContent = 'You';

  const handle = document.createElement('span');
  handle.textContent = '@you';

  const time = document.createElement('span');
  time.textContent = 'now';  // Demonstration only, this would be a timestamp

  const paragraph = document.createElement('p');
  paragraph.textContent = postText;

  const actions = document.createElement('div');
  actions.className = 'feed-actions';
  actions.innerHTML = `
    <button type="button"><i class="bi bi-heart"></i><span>0</span></button>
    <button type="button"><i class="bi bi-chat"></i><span>0</span></button>
  `;

  header.append(name, handle, time);
  body.append(header, paragraph, actions);
  article.append(avatar, body);

  insertAfterPost.insertAdjacentElement('afterend', article);
}

// Post Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Grab the elements
  const createPostBtn = document.getElementById('createPostBtn');
  const postModalOverlay = document.getElementById('postModalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalTextarea = postModalOverlay ? postModalOverlay.querySelector('textarea') : null;
  const modalPostButton = postModalOverlay ? postModalOverlay.querySelector('.post-submit-btn') : null;
  const composerPost = document.querySelector('.composer-preview');

  if (!createPostBtn || !postModalOverlay || !closeModalBtn || !modalTextarea || !modalPostButton || !composerPost) {
    return;
  }

  const openPostModal = () => {
    postModalOverlay.classList.remove('hidden');
    modalTextarea.focus();
  };

  // Show modal when the blue plus icon is clicked
  createPostBtn.addEventListener('click', openPostModal);

  modalPostButton.addEventListener('click', () => {
    const postText = modalTextarea.value.trim();

    if (!postText) {
      modalTextarea.focus();
      return;
    }

    createFeedPost(postText, composerPost);
    modalTextarea.value = '';
    postModalOverlay.classList.add('hidden');
  });

  // Hide modal when the 'X' is clicked
  closeModalBtn.addEventListener('click', () => {
    postModalOverlay.classList.add('hidden');
  });

  // Hide modal when clicking the dark background outside the box
  postModalOverlay.addEventListener('click', (event) => {
    if (event.target === postModalOverlay) {
      postModalOverlay.classList.add('hidden');
    }
  });
});

// Feed Like Button Functionality
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    const heartIcon = event.target.closest('.feed-actions button .bi-heart, .feed-actions button .bi-heart-fill');

    if (!heartIcon) {
      return;
    }

    const likeButton = heartIcon.closest('button');
    const likeCount = likeButton.querySelector('span');

    const isLiked = likeButton.classList.toggle('liked');
    heartIcon.classList.toggle('bi-heart');
    heartIcon.classList.toggle('bi-heart-fill');

    if (likeCount) {
      const currentCount = Number(likeCount.textContent);
      likeCount.textContent = String(currentCount + (isLiked ? 1 : -1));
    }
  });
});

// Feed Comment Popup Functionality
document.addEventListener('DOMContentLoaded', () => {
  const feedActions = document.querySelectorAll('.feed-actions');
  const commentsByPost = new Map();
  let activePost = null;
  let activeCount = null;

  if (feedActions.length === 0) {
    return;
  }

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay hidden';
  modalOverlay.innerHTML = `
    <div class="comment-modal">
      <div class="modal-header">
        <h3>Comments</h3>
        <button type="button" class="close-btn" id="closeCommentModal">&times;</button>
      </div>
      <div class="comment-post-preview">
        <strong id="commentPostAuthor"></strong>
        <p id="commentPostText"></p>
      </div>
      <div class="comment-list" id="commentList"></div>
      <form class="comment-form" id="commentForm">
        <textarea id="commentInput" placeholder="Write a comment..."></textarea>
        <button type="submit" class="comment-submit-btn">Post</button>
      </form>
    </div>
  `;
  document.body.appendChild(modalOverlay);

  const closeCommentModal = document.getElementById('closeCommentModal');
  const commentPostAuthor = document.getElementById('commentPostAuthor');
  const commentPostText = document.getElementById('commentPostText');
  const commentList = document.getElementById('commentList');
  const commentForm = document.getElementById('commentForm');
  const commentInput = document.getElementById('commentInput');

  const renderComments = () => {
    const comments = commentsByPost.get(activePost) || [];

    if (comments.length === 0) {
      commentList.innerHTML = '<div class="comment-empty">No comments yet.</div>';
      return;
    }

    commentList.innerHTML = '';
    comments.forEach((comment) => {
      const commentItem = document.createElement('div');
      commentItem.className = 'comment-item';
      commentItem.textContent = comment;
      commentList.appendChild(commentItem);
    });
  };

  const openCommentModal = (post, countElement) => {
    activePost = post;
    activeCount = countElement;

    const author = post.querySelector('.feed-post-header strong');
    const postText = post.querySelector('.feed-post-body p');

    commentPostAuthor.textContent = author ? author.textContent : 'Post';
    commentPostText.textContent = postText ? postText.textContent : '';
    commentInput.value = '';
    renderComments();

    modalOverlay.classList.remove('hidden');
    commentInput.focus();
  };

  const hideCommentModal = () => {
    modalOverlay.classList.add('hidden');
  };

  document.addEventListener('click', (event) => {
    const commentIcon = event.target.closest('.feed-actions button .bi-chat');

    if (!commentIcon) {
      return;
    }

    const commentButton = commentIcon.closest('button');
    const countElement = commentButton.querySelector('span');
    const post = commentButton.closest('.feed-post');

    if (!post) {
      return;
    }

    if (!commentsByPost.has(post)) {
      commentsByPost.set(post, []);
    }

    openCommentModal(post, countElement);
  });

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const comment = commentInput.value.trim();
    if (!comment || !activePost) {
      return;
    }

    const comments = commentsByPost.get(activePost) || [];
    comments.push(comment);
    commentsByPost.set(activePost, comments);

    if (activeCount) {
      activeCount.textContent = String(Number(activeCount.textContent) + 1);
    }

    commentInput.value = '';
    renderComments();
  });

  closeCommentModal.addEventListener('click', hideCommentModal);

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      hideCommentModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideCommentModal();
    }
  });
});

// Inline Composer Functionality
document.addEventListener('DOMContentLoaded', () => {
  const composerInput = document.querySelector('.composer-placeholder');
  const composerPostButton = document.querySelector('.composer-post-btn');
  const composerPost = document.querySelector('.composer-preview');

  if (!composerInput || !composerPostButton || !composerPost) {
    return;
  }

  composerPostButton.addEventListener('click', () => {
    const postText = composerInput.value.trim();

    if (!postText) {
      composerInput.focus();
      return;
    }

    createFeedPost(postText, composerPost);
    composerInput.value = '';
  });
});

// Search Button Functionality
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    window.location.href = 'Search.html';
  });
}

// Search Page Functionality
const searchInput = document.getElementById('searchInput');
const performSearchBtn = document.getElementById('performSearchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchResults = document.getElementById('searchResults');

let currentFilter = 'all';

if (searchInput && performSearchBtn) {
  // Search on button click
  performSearchBtn.addEventListener('click', performSearch);
  
  // Search on Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      performSearch();
    });
  });
}

function performSearch() {
  const query = searchInput.value.trim();
  if (!query) {
    searchResults.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 40px;">Enter a search term to find posts, users, or topics.</p>';
    return;
  }
  
  // Mock search results - in a real app, this would call an API
  let results = [];
  
  if (currentFilter === 'all' || currentFilter === 'posts') {
    results.push({
      type: 'post',
      title: `Posts containing "${query}"`,
      content: 'Sample post result...'
    });
  }
  
  if (currentFilter === 'all' || currentFilter === 'users') {
    results.push({
      type: 'user',
      title: `Users matching "${query}"`,
      content: 'Sample user result...'
    });
  }
  
  if (currentFilter === 'all' || currentFilter === 'topics') {
    results.push({
      type: 'topic',
      title: `Topics related to "${query}"`,
      content: 'Sample topic result...'
    });
  }
  
  // Display results
  if (results.length === 0) {
    searchResults.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 40px;">No results found.</p>';
  } else {
    searchResults.innerHTML = results.map(result => `
      <div class="search-result-item" style="padding: 20px; border-bottom: 1px solid #dee2e6;">
        <div style="font-weight: bold; margin-bottom: 8px;">${result.title}</div>
        <div style="color: #6c757d;">${result.content}</div>
      </div>
    `).join('');
  }
}
