const facilityData = {
  foe: {
    title: "Faculty of Engineering (FOE)",
    description: "Engineering faculty building and surrounding learning spaces. This building is also known as FAIE (Faculty of Artifical Intelligence & Engineering).",
    images: ["images/foe.jpg", "images/foe2.jpg", "images/foe3.jpg"]  
  },
  fci: {
    title: "Faculty of Computing & Informatics (FCI)",
    description: "Computing and informatics faculty area for classes, labs, and student activities.",
    images: ["images/fci.jpg", "images/fci2.jpg", "images/fci3.jpg", "images/fci4.jpg"] 
  },
  fom: {
    title: "Faculty of Management (FOM)",
    description: "Management faculty building for business, accounting, and management programs.",
    images: ["images/fom.jpg", "images/fom2.jpg"]  
  },
  fcm: {
    title: "Faculty of Creative Media (FCM)",
    description: "Creative media faculty space for design, animation, and multimedia learning.",
    images: ["images/fcm.jpg", "images/fcm2.jpg"]  
  },
  stad: {
    title: "Students Affairs Division (STAD)",
    description: "Student support office for campus services, activities, and student matters.",
    images: ["images/stad.jpg", "images/stad2.jpg"] 
  },
  dtc: {
    title: "Dewan Tun Canselor (DTC)",
    description: "Main hall used for official events, ceremonies, and large campus gatherings.",
    images: ["images/dtc.png", "images/dtc2.png", "images/dtc3.png"]  
  },
  chancellery: {
    title: "MMU Chancellery",
    description: "Administrative building for university management and official offices.",
    images: ["images/chancellery.png"] 
  },
  fmd: {
    title: "Facilities Management Department (FMD)",
    description: "Facilities office that manages campus maintenance and infrastructure services.",
    images: ["images/fmd.jpg"]
  },
  isc: {
    title: "Indoor Sports Center (ISC)",
    description: "Indoor sports venue for games, training, and student recreation.",
    images: ["images/isc.jpg", "images/isc2.jpg"] 
  },
  clc: {
    title: "Common Lecture Complex (CLC)",
    description: "Shared lecture complex used for classes and academic sessions.",
    images: ["images/clc.jpg"]  
  },
  library: {
    title: "Siti Hasmah Digital Library",
    description: "Campus library with study areas, digital resources, and academic references.",
    images: ["images/library2.png", "images/library3.jpg", "images/library.png"] 
  },
  stadium: {
    title: "MMU Stadium",
    description: "Outdoor stadium for sports events, training, and campus activities.",
    images: ["images/Stadium.png", "images/stadium2.jpg"] 
  },
  pool: {
    title: "Swimming Pool",
    description: "Swimming facility for recreation, training, and aquatic activities.",
    images: ["images/Swimmingpool2.jpg", "images/Swimmingpool.png"]  
  },
  vcourt: {
    title: "Volleyball / Takraw Court",
    description: "Outdoor court area for volleyball, sepak takraw, and casual sports.",
    images: ["images/vcourt.jpg"]  
  },
  mosque: {
    title: "Mosque",
    description: "Prayer and gathering space for Muslim students and staff.",
    images: ["images/mosque.jpg", "images/mosque2.png"] 
  },
  theatre: {
    title: "E-Theatre",
    description: "Theatre venue for theatrical performances and screenings.",
    images: ["images/theatre.jpg"] 
  },
  sbcourt: {
    title: "Squash / Badminton Court",
    description: "Indoor courts for squash, badminton, and student sports activities.",
    images: ["images/sbcourt.png"]  
  },
  gym: {
    title: "Gym",
    description: "Fitness facility with exercise equipment for student and staff workouts.",
    images: ["images/Gym.png", "images/Gym2.png", "images/Gym3.png"]  
  },
  finance: {
    title: "Finance Department",
    description: "Office for finance services, payments, and related university matters. It can be found in STAD building.",
    images: ["images/stad(ess).jpg"]  // Link with stad
  },
  sad:{
    title: "Student Affairs Department (SAD)",
    description: "Department that supports student welfare, activities, and campus life. It can be found in STAD building.",
    images: ["images/stad(ess).jpg"]  // Link with stad
  },
  pu:{
    title: "Procurement unit (PU)",
    description: "Office handling procurement, purchasing, and supplier-related services. It can be found in STAD building.",
    images: ["images/stad(ess).jpg"]  // Link with stad
  },
  cynergy:{
    title: "MMU Cynergy",
    description: "Campus center supporting entrepreneurial, business, or innovation initiatives.",
    images: ["images/cynergy.jpg"] 
  },
  edc:{
    title: "Entrepreneurship Development Center (EDC)",
    description: "Center for entrepreneurship programs, startup support, and business development.",
    images: ["images/edc.jpg"]  
  },
  itsd:{
    title: "Information Technology Service Division (ITSD)",
    description: "IT service office for campus systems, technical support, and digital services. It can be found in FCM building.",
    images: ["images/fcm.jpg", "images/fcm2.jpg"]  // Link with fcm
  },
  ips:{
    title: "Institute of Postgraduate Studies (IPS)",
    description: "Institute supporting postgraduate admissions, study matters, and research students.",
    images: ["images/ips.jpg"]  
  },
  eru:{
    title: "Examination & Record Unit (ERU)",
    description: "Office for examination records, academic documents, and student record services.",
    images: ["images/ips.jpg"]  // Link with ips
  },  
  hrm:{
    title: "Human Resource Management (HRM)",
    description: "Human resource office for staff services and employment-related support. It can be found in chancellery building.",
    images: ["images/chancellery.png"]  // Link with chancellery
  },
  gsom:{
    title: "Graduate School of Management (GSOM)",
    description: "Graduate school area for management programs and postgraduate learning. It can be found in chancellery building.",
    images: ["images/chancellery.png"]  // Link with chancellery
  },
  io:{
    title: "International Office (IO)",
    description: "Office supporting international students, mobility programs, and global partnerships. It can be found in chancellery building.",
    images: ["images/chancellery.png"]  // Link with chancellery
  },
  bu:{
    title: "Business Unit (BU)",
    description: "Business unit office for university services and operational support. It can be found in chancellery building.",
    images: ["images/chancellery.png"]  // Link with chancellery
  },
};

// MMU map images of facilities
function openGallery(facilityKey) {
  const data = facilityData[facilityKey];
  document.getElementById('galleryTitle').innerText = data.title;
  
  const container = document.getElementById('imageContainer');
  container.innerHTML = ''; 

  data.images.forEach(src => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;

    const caption = document.createElement('figcaption');
    caption.textContent = data.description;

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
