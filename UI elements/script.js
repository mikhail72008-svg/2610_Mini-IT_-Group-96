const facilityData = {
  foe: {
    title: "Faculty of Engineering (FOE)",
    images: ["foe1.jpg", "foe2.jpg", "foe3.jpg"]  // Replace with actual image paths
  },
  fci: {
    title: "Faculty of Computing & Informatics (FCI)",
    images: ["fci1.jpg", "fci2.jpg"]  // Replace with actual image paths
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
    images: ["cynergy1.jpg", "cynergy2.jpg"]  // Replace with actual image paths
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

function openGallery(facilityKey) {
  const data = facilityData[facilityKey];
  document.getElementById('galleryTitle').innerText = data.title;
  
  const container = document.getElementById('imageContainer');
  container.innerHTML = ''; // Clear previous images

  // Add new images
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