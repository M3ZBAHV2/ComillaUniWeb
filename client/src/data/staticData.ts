import campusImage from "@assets/generated_images/university_building_exterior_walkway.png";
import libraryImage from "@assets/generated_images/university_library_interior_students.png";
import studentsImage from "@assets/generated_images/students_outdoor_campus_life.png";
import labImage from "@assets/generated_images/science_laboratory_students_working.png";
import researchImage from "@assets/generated_images/research_center_collaboration_scene.png";

export type News = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: Date;
  category: string;
};

export type Announcement = {
  id: string;
  title: string;
  date: Date;
  type: string;
};

export type Department = {
  id: string;
  name: string;
  description: string;
};

export const imageMap: Record<string, string> = {
  "university_building_exterior_walkway": campusImage,
  "university_library_interior_students": libraryImage,
  "students_outdoor_campus_life": studentsImage,
  "science_laboratory_students_working": labImage,
  "research_center_collaboration_scene": researchImage,
};

export const newsData: News[] = [
  {
    id: "1",
    title: "First-ever Bangladesh Mental Health Awareness Campaign at Comilla University",
    excerpt: "Comilla University launches groundbreaking mental health initiative to support student well-being and create awareness about mental health resources available on campus.",
    content: "Comilla University is proud to announce the launch of the first-ever comprehensive mental health awareness campaign in Bangladesh. This initiative aims to break the stigma surrounding mental health issues and provide students with accessible resources and support systems.",
    image: "university_building_exterior_walkway",
    date: new Date("2023-12-15"),
    category: "Campus Life",
  },
  {
    id: "2",
    title: "New Student Wellness Center Opens at Comilla University",
    excerpt: "State-of-the-art facility provides comprehensive health services including counseling, medical care, and wellness programs for all students.",
    content: "The university inaugurated a modern wellness center equipped with the latest medical facilities, counseling rooms, and wellness program spaces to support student health and well-being.",
    image: "university_library_interior_students",
    date: new Date("2023-12-10"),
    category: "Facilities",
  },
  {
    id: "3",
    title: "Comilla University Students to Collaborate on National Mental Health Campaign",
    excerpt: "Collaborative program between universities focuses on mental health awareness and support systems across Bangladesh.",
    content: "Students from Comilla University will participate in a nationwide mental health awareness program, partnering with other leading institutions to promote mental wellness.",
    image: "students_outdoor_campus_life",
    date: new Date("2023-12-05"),
    category: "Collaboration",
  },
  {
    id: "4",
    title: "CU Students Win National Research Competition in Computer Science",
    excerpt: "Outstanding achievement in scientific research and innovation brings national recognition to Comilla University.",
    content: "A team of Computer Science students from Comilla University won first place in the National Research Competition, showcasing their innovative work in artificial intelligence and machine learning.",
    image: "science_laboratory_students_working",
    date: new Date("2023-12-01"),
    category: "Achievement",
  },
  {
    id: "5",
    title: "International Conference on Sustainable Development Held at CU",
    excerpt: "Leading researchers from around the world gather to discuss sustainable development goals and environmental challenges.",
    content: "Comilla University hosted an international conference bringing together experts, researchers, and policymakers to address pressing environmental and sustainability issues.",
    image: "research_center_collaboration_scene",
    date: new Date("2023-11-25"),
    category: "Research",
  },
];

export const announcementData: Announcement[] = [
  {
    id: "1",
    title: "17th Convocation-Open Distribution Schedule for Fall 2023",
    date: new Date("2024-04-18"),
    type: "announcement",
  },
  {
    id: "2",
    title: "New Term Exam schedule for Fall 2023",
    date: new Date("2023-11-07"),
    type: "announcement",
  },
  {
    id: "3",
    title: "BCS Administration Academy invites research proposals for FY 2025-2027",
    date: new Date("2023-10-04"),
    type: "announcement",
  },
  {
    id: "4",
    title: "LIC 'Wealthy' Talent Scholarship, Spring 2025",
    date: new Date("2023-09-02"),
    type: "announcement",
  },
  {
    id: "5",
    title: "Spring Semester Begins - Classes Start",
    date: new Date("2024-01-15"),
    type: "academic-date",
  },
  {
    id: "6",
    title: "Mid-Semester Examination Schedule Released",
    date: new Date("2023-10-20"),
    type: "academic-date",
  },
];

export const departmentData: Department[] = [
  { id: "1", name: "Computer Science", description: "Advanced computing and technology" },
  { id: "2", name: "Engineering", description: "Civil, Electrical & Mechanical Engineering" },
  { id: "3", name: "Business Administration", description: "Management & Commerce Studies" },
  { id: "4", name: "Law", description: "Legal Studies & Justice" },
  { id: "5", name: "Medicine", description: "Medical Sciences & Health" },
  { id: "6", name: "Arts & Humanities", description: "Literature, History & Culture" },
  { id: "7", name: "Science", description: "Physics, Chemistry & Biology" },
  { id: "8", name: "Agriculture", description: "Agricultural Sciences & Technology" },
  { id: "9", name: "Economics", description: "Economic Studies & Development" },
  { id: "10", name: "Sociology", description: "Social Sciences & Society" },
  { id: "11", name: "Political Science", description: "Governance & Politics" },
  { id: "12", name: "Education", description: "Educational Sciences & Pedagogy" },
  { id: "13", name: "Mathematics", description: "Pure & Applied Mathematics" },
  { id: "14", name: "Environmental Science", description: "Ecology & Sustainability" },
  { id: "15", name: "Psychology", description: "Mental Sciences & Behavior" },
  { id: "16", name: "Philosophy", description: "Philosophical Studies & Ethics" },
  { id: "17", name: "Geography", description: "Physical & Human Geography" },
  { id: "18", name: "Journalism", description: "Mass Communication & Media" },
  { id: "19", name: "Fine Arts", description: "Visual & Performing Arts" },
];
