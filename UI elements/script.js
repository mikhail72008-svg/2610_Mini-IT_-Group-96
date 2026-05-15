const facilityData = {
  foe: {
    title: "Faculty of Engineering (FOE)",
    images: ["foe1.jpg", "foe2.jpg", "foe3.jpg"]  // Replace with actual image paths
  },
  fci: {
    title: "Faculty of Computing & Informatics (FCI)",
    images: ["fci1.jpg", ""]  // Replace with actual image paths
  },
  fom: {
    title: "Faculty of Management (FOM)",
    images: ["fom1.jpg", "fom2.jpg"]  // Replace with actual image paths
  },
  fcm: {
    title: "Faculty of Creative Media (FCM)",
    images: ["fcm1.jpg", "fcm2.jpg"]  // Replace with actual image paths
  },
  stad: {
    title: "Students Affairs Division (STAD)",
    images: ["stad1.jpg", "stad2.jpg"]  // Replace with actual image paths
  },
  dtc: {
    title: "Dewan Tun Canselor (DTC)",
    images: ["dtc1.jpg", "dtc2.jpg"]  // Replace with actual image paths
  },
  chancellery: {
    title: "MMU Chancellery",
    images: ["chancellery1.jpg", "chancellery2.jpg"]  // Replace with actual image paths
  },
  fmd: {
    title: "Facilities Management Department (FMD)",
    images: ["fmd1.jpg", "fmd2.jpg"]  // Replace with actual image paths
  },
  isc: {
    title: "Indoor Sports Center (ISC)",
    images: ["isc1.jpg", "isc2.jpg"]  // Replace with actual image paths
  },
  clc: {
    title: "Common Lecture Complex (CLC)",
    images: ["clc1.jpg", "clc2.jpg"]  // Replace with actual image paths
  },
  library: {
    title: "Siti Hasmah Digital Library",
    images: ["library1.jpg", "library2.jpg"]  // Replace with actual image paths
  },
  stadium: {
    title: "MMU Stadium",
    images: ["stadium1.jpg", "stadium2.jpg"]  // Replace with actual image paths
  },
  pool: {
    title: "Swimming Pool",
    images: ["pool1.jpg", "pool2.jpg"]  // Replace with actual image paths
  },
  vcourt: {
    title: "Volleyball / Takraw Court",
    images: ["vcourt1.jpg", "vcourt2.jpg"]  // Replace with actual image paths
  },
  mosque: {
    title: "Mosque",
    images: ["mosque1.jpg", "mosque2.jpg"]  // Replace with actual image paths
  },
  theatre: {
    title: "E-Theatre",
    images: ["theatre1.jpg", "theatre2.jpg"]  // Replace with actual image paths
  },
  sbcourt: {
    title: "Squash / Badminton Court",
    images: ["sbcourt1.jpg", "sbcourt2.jpg"]  // Replace with actual image paths
  },
  gym: {
    title: "Gym",
    images: ["gym1.jpg", "gym2.jpg"]  // Replace with actual image paths
  },
  finance: {
    title: "Finance Department",
    images: ["finance1.jpg", "finance2.jpg"]  // Replace with actual image paths
  },
  sad:{
    title: "Student Affairs Department (SAD)",
    images: ["sad1.jpg", "sad2.jpg"]  // Replace with actual image paths
  },
  pu:{
    title: "Procurement unit (PU)",
    images: ["pu1.jpg", "pu2.jpg"]  // Replace with actual image paths
  },
  cynergy:{
    title: "MMU Cynergy",
    images: ["images/cynergy.jpg"]  // Replace with actual image paths
  },
  edc:{
    title: "Entrepreneurship Development Center (EDC)",
    images: ["edc1.jpg", "edc2.jpg"]  // Replace with actual image paths
  },
  itsd:{
    title: "Information Technology Service Division (ITSD)",
    images: ["itsd1.jpg", "itsd2.jpg"]  // Replace with actual image paths
  },
  ips:{
    title: "Institute of Postgraduate Studies (IPS)",
    images: ["ips1.jpg", "ips2.jpg"]  // Replace with actual image paths
  },
  eru:{
    title: "Examination & Record Unit (ERU)",
    images: ["eru1.jpg", "eru2.jpg"]  // Replace with actual image paths
  },  
  hrm:{
    title: "Human Resource Management (HRM)",
    images: ["hrm1.jpg", "hrm2.jpg"]  // Replace with actual image paths
  },
  gsom:{
    title: "Graduate School of Management (GSOM)",
    images: ["gsom1.jpg", "gsom2.jpg"]  // Replace with actual image paths
  },
  io:{
    title: "International Office (IO)",
    images: ["io1.jpg", "io2.jpg"]  // Replace with actual image paths
  },
  bu:{
    title: "Business Unit (BU)",
    images: ["bu1.jpg", "bu2.jpg"]  // Replace with actual image paths
  },
};

// MMU map images of facilities
function openGallery(facilityKey) {
  const data = facilityData[facilityKey];
  document.getElementById('galleryTitle').innerText = data.title;
  
  const container = document.getElementById('imageContainer');
  container.innerHTML = ''; 

  data.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
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
      profileAvatar.src = newSrc;
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
