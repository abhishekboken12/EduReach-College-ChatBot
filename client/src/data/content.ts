export const siteConfig = {
  name: "EduReach",
  tagline: "Your Gateway to Smarter Education Decisions",
  established: "Est. 2005",
};

export const images = {
  // Campus & buildings
  hero: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014920/campus_lnna9a.avif",
  campus1: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014920/campuss_uehbkc.avif",
  campus2: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014917/campus2_zf54py.jpg",
  collegeOutdoor: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014919/college_outdoor_fjyaux.avif",
  collegeClassroom: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014917/college_classroom_exefui.avif",
  // Students
  students: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014918/students_mxoblc.avif",
  moreStudents: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772099852/Gemini_Generated_Image_w1wdytw1wdytw1wd_mcx5pd.png",
  // Fests
  fest: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014920/fest_us0xrh.avif",
  universityFest: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014920/university_fest_yfozy0.avif",
  recruter1: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772099817/comapny2_bxy1wd.png",
  recruter2: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772100414/mnc_comapnies_k3o8pm.png",
  // Technology
  tech1: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014921/technology1_pyglce.png",
  tech2: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014918/technology_2_ygoerk.jpg",
  tech3: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014918/technology3_adezvo.jpg",
  tech4: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014919/tech4_grbl1u.jpg",
  // Teachers
  teacher1: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014914/teacher1_o1xjdu.jpg",
  teacher2: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014915/teacher2_dgauam.jpg",
  teacher3: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014915/teacher3_hffv5u.jpg",
  teacher4: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014916/teacher4_lm99x4.jpg",
};

// ---- NAV LINKS ----
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Mentors", href: "#mentors" },
  { label: "Campus", href: "#campus" },
  { label: "Placements", href: "#placements" },
];

// ---- ABOUT ----
export const aboutContent = {
  title: "About EduReach College",
  subtitle: "Empowering Futures Since 2005",
  description:
    "EduReach College is a premier engineering and technology institution established in 2005, located in Hyderabad, Telangana. Affiliated with JNTU Hyderabad and approved by AICTE, New Delhi, our 25-acre campus features smart classrooms, advanced laboratories, and a central library with 50,000+ books.",
  highlights: [
    { value: "150+", label: "Experienced Professors" },
    { value: "15:1", label: "Student-Faculty Ratio" },
    { value: "Top 50", label: "In Telangana" },
    { value: "10,000+", label: "Alumni Worldwide" },
  ],
};

// ---- ACHIEVEMENTS ----
export const achievementsContent = {
  stats: [
    { value: "92%", label: "Placement Rate" },
    { value: "₹42 LPA", label: "Highest Package" },
    { value: "150+", label: "Companies Visit" },
    { value: "850+", label: "Total Offers" },
  ],
};

// ---- COURSES ----
export const coursesContent = {
  btech: [
    { name: "Computer Science & Engineering", seats: 180, avg: "₹10.2 LPA" },
    { name: "Electronics & Communication", seats: 120, avg: "₹7.2 LPA" },
    { name: "AI & Data Science", seats: 60, avg: "₹11.5 LPA" },
    { name: "Information Technology", seats: 120, avg: "₹8.8 LPA" },
    { name: "Mechanical Engineering", seats: 60, avg: "₹5.5 LPA" },
    { name: "Civil Engineering", seats: 60, avg: "₹5.0 LPA" },
  ],
  mtech: [
    { name: "Computer Science", seats: 30 },
    { name: "VLSI Design", seats: 18 },
    { name: "Structural Engineering", seats: 18 },
  ],
  mba: { name: "MBA (Finance, Marketing, HR, IT)", seats: 60, avg: "₹8.0 LPA" },
};

// ---- QUOTES ----
export const quotesContent = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
];

// ---- MENTORS ----
export const mentorsContent = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Head of CSE Department",
    image: images.teacher1,
    bio: "PhD IIT Bombay · 20+ years · 50+ research papers",
    teaches: "AI, ML, Data Science",
  },
  {
    name: "Prof. Ananya Sharma",
    role: "Associate Professor, ECE",
    image: images.teacher2,
    bio: "M.Tech IIT Hyderabad · 15 yrs academia + 5 yrs Texas Instruments",
    teaches: "VLSI, Embedded Systems, IoT",
  },
  {
    name: "Dr. Vikram Patel",
    role: "Professor, AI & DS",
    image: images.teacher3,
    bio: "PhD Stanford · Former Google Research · 30+ NeurIPS papers",
    teaches: "NLP, Deep Learning, Computer Vision",
  },
  {
    name: "Prof. Meera Reddy",
    role: "Head of MBA Department",
    image: images.teacher4,
    bio: "MBA IIM Ahmedabad · PhD ISB · 18 yrs + 7 yrs Deloitte",
    teaches: "Startup Incubator Lead",
  },
];

// ---- CAMPUS / STUDENT LIFE (uses 6 images) ----
export const campusFeatures = [
  { title: "Smart Campus", desc: "25-acre green campus, full Wi-Fi, smart classrooms, 500+ computers.", image: images.campus1 },
  { title: "Central Library", desc: "50,000+ books, digital library, 24/7 reading room.", image: images.collegeClassroom },
  { title: "Hostels & Dining", desc: "Separate hostels, AC/Non-AC rooms, veg & non-veg mess, gym.", image: images.campus2 },
  { title: "Fests & Events", desc: "TechNova (Oct), Aarohan (Mar), EduSports (Feb), hackathons.", image: images.fest },
  { title: "Clubs & Societies", desc: "Coding, Robotics, AI, Literary, Photography, Music, NSS, NCC.", image: images.universityFest },
  { title: "Sports Complex", desc: "Cricket, football, basketball, tennis, volleyball, badminton.", image: images.collegeOutdoor },
];

// ---- PLACEMENTS ----
export const topRecruiters = [
  "TCS", "Infosys", "Wipro", "Google", "Microsoft", "Amazon",
  "Flipkart", "Deloitte", "Accenture", "Razorpay", "Zerodha",
  "CRED", "PhonePe", "HCL", "L&T", "Bosch", "Siemens", "EY", "KPMG",
];

export const deptPlacements = [
  { dept: "AI & DS", avg: "₹11.5 LPA", pct: 100 },
  { dept: "CSE", avg: "₹10.2 LPA", pct: 89 },
  { dept: "IT", avg: "₹8.8 LPA", pct: 77 },
  { dept: "MBA", avg: "₹8.0 LPA", pct: 70 },
  { dept: "ECE", avg: "₹7.2 LPA", pct: 63 },
  { dept: "ME", avg: "₹5.5 LPA", pct: 48 },
  { dept: "CE", avg: "₹5.0 LPA", pct: 43 },
];



// ---- CONTACT ----
export const contactInfo = {
  email: "admissions@edureach.edu.in",
  phone: "+91-9876543210",
  general: "info@edureach.edu.in",
  address: "Hyderabad, Telangana, India",
};

export const eventsGallery = [
  { title: "TechNova Hackathon", image: images.recruter1 },
  { title: "Annual Cultural Fest", image: images.recruter2 },
  { title: "Campus Placement Drive", image: images.students },
  { title: "Workshop Series", image: images.tech4 },
  { title: "University Fest", image: images.universityFest },
  { title: "Sports Meet", image: images.collegeOutdoor },
];