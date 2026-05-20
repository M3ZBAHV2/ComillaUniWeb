import { 
  type News, 
  type InsertNews,
  type Announcement,
  type InsertAnnouncement,
  type Department,
  type InsertDepartment
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // News
  getAllNews(): Promise<News[]>;
  getNewsById(id: string): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  
  // Announcements
  getAllAnnouncements(): Promise<Announcement[]>;
  getAnnouncementsByType(type: string): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  
  // Departments
  getAllDepartments(): Promise<Department[]>;
  getDepartmentById(id: string): Promise<Department | undefined>;
  createDepartment(department: InsertDepartment): Promise<Department>;
}

export class MemStorage implements IStorage {
  private news: Map<string, News>;
  private announcements: Map<string, Announcement>;
  private departments: Map<string, Department>;

  constructor() {
    this.news = new Map();
    this.announcements = new Map();
    this.departments = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed News
    const newsItems = [
      {
        id: randomUUID(),
        title: "First-ever Bangladesh Mental Health Awareness Campaign at Comilla University",
        excerpt: "Comilla University launches groundbreaking mental health initiative to support student well-being and create awareness about mental health resources available on campus.",
        content: "Comilla University is proud to announce the launch of the first-ever comprehensive mental health awareness campaign in Bangladesh. This initiative aims to break the stigma surrounding mental health issues and provide students with accessible resources and support systems.",
        image: "university_building_exterior_walkway",
        date: new Date("2023-12-15"),
        category: "Campus Life",
      },
      {
        id: randomUUID(),
        title: "New Student Wellness Center Opens at Comilla University",
        excerpt: "State-of-the-art facility provides comprehensive health services including counseling, medical care, and wellness programs for all students.",
        content: "The university inaugurated a modern wellness center equipped with the latest medical facilities, counseling rooms, and wellness program spaces to support student health and well-being.",
        image: "university_library_interior_students",
        date: new Date("2023-12-10"),
        category: "Facilities",
      },
      {
        id: randomUUID(),
        title: "Comilla University Students to Collaborate on National Mental Health Campaign",
        excerpt: "Collaborative program between universities focuses on mental health awareness and support systems across Bangladesh.",
        content: "Students from Comilla University will participate in a nationwide mental health awareness program, partnering with other leading institutions to promote mental wellness.",
        image: "students_outdoor_campus_life",
        date: new Date("2023-12-05"),
        category: "Collaboration",
      },
      {
        id: randomUUID(),
        title: "CU Students Win National Research Competition in Computer Science",
        excerpt: "Outstanding achievement in scientific research and innovation brings national recognition to Comilla University.",
        content: "A team of Computer Science students from Comilla University won first place in the National Research Competition, showcasing their innovative work in artificial intelligence and machine learning.",
        image: "science_laboratory_students_working",
        date: new Date("2023-12-01"),
        category: "Achievement",
      },
      {
        id: randomUUID(),
        title: "International Conference on Sustainable Development Held at CU",
        excerpt: "Leading researchers from around the world gather to discuss sustainable development goals and environmental challenges.",
        content: "Comilla University hosted an international conference bringing together experts, researchers, and policymakers to address pressing environmental and sustainability issues.",
        image: "research_center_collaboration_scene",
        date: new Date("2023-11-25"),
        category: "Research",
      },
    ];

    newsItems.forEach(item => {
      this.news.set(item.id, item as News);
    });

    // Seed Announcements
    const announcementItems = [
      {
        id: randomUUID(),
        title: "17th Convocation-Open Distribution Schedule for Fall 2023",
        date: new Date("2024-04-18"),
        type: "announcement",
      },
      {
        id: randomUUID(),
        title: "New Term Exam schedule for Fall 2023",
        date: new Date("2023-11-07"),
        type: "announcement",
      },
      {
        id: randomUUID(),
        title: "BCS Administration Academy invites research proposals for FY 2025-2027",
        date: new Date("2023-10-04"),
        type: "announcement",
      },
      {
        id: randomUUID(),
        title: "LIC 'Wealthy' Talent Scholarship, Spring 2025",
        date: new Date("2023-09-02"),
        type: "announcement",
      },
      {
        id: randomUUID(),
        title: "Spring Semester Begins - Classes Start",
        date: new Date("2024-01-15"),
        type: "academic-date",
      },
      {
        id: randomUUID(),
        title: "Mid-term Examination Period",
        date: new Date("2024-03-20"),
        type: "academic-date",
      },
      {
        id: randomUUID(),
        title: "Final Examination Period",
        date: new Date("2024-05-10"),
        type: "academic-date",
      },
      {
        id: randomUUID(),
        title: "Spring Semester Ends - Results Publication",
        date: new Date("2024-05-30"),
        type: "academic-date",
      },
    ];

    announcementItems.forEach(item => {
      this.announcements.set(item.id, item as Announcement);
    });

    // Seed Departments
    const departmentList = [
      { name: "Mathematics", description: "Advanced mathematical theory and applications" },
      { name: "Physics", description: "Fundamental physics and applied research" },
      { name: "Statistics", description: "Statistical analysis and data science" },
      { name: "Chemistry", description: "Chemical sciences and research" },
      { name: "Pharmacy", description: "Pharmaceutical sciences and drug development" },
      { name: "English", description: "English literature and language studies" },
      { name: "Bengali", description: "Bengali literature and cultural studies" },
      { name: "Economics", description: "Economic theory and development studies" },
      { name: "Public Administration", description: "Governance and public policy" },
      { name: "Anthropology", description: "Cultural and social anthropology" },
      { name: "Mass Communication & Journalism", description: "Media studies and journalism" },
      { name: "Archaeology", description: "Archaeological research and heritage studies" },
      { name: "Management Studies", description: "Business management and administration" },
      { name: "AIS", description: "Accounting and Information Systems" },
      { name: "Marketing", description: "Marketing strategy and consumer behavior" },
      { name: "Finance and Banking", description: "Financial management and banking operations" },
      { name: "CSE", description: "Computer Science and Engineering" },
      { name: "ICT", description: "Information and Communication Technology" },
      { name: "Law", description: "Legal studies and jurisprudence" },
    ];

    departmentList.forEach(dept => {
      const id = randomUUID();
      this.departments.set(id, {
        id,
        name: dept.name,
        description: dept.description,
      });
    });
  }

  // News methods
  async getAllNews(): Promise<News[]> {
    return Array.from(this.news.values()).sort((a, b) => 
      b.date.getTime() - a.date.getTime()
    );
  }

  async getNewsById(id: string): Promise<News | undefined> {
    return this.news.get(id);
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = randomUUID();
    const news: News = { 
      ...insertNews, 
      id,
      date: insertNews.date || new Date()
    };
    this.news.set(id, news);
    return news;
  }

  // Announcements methods
  async getAllAnnouncements(): Promise<Announcement[]> {
    return Array.from(this.announcements.values()).sort((a, b) => 
      b.date.getTime() - a.date.getTime()
    );
  }

  async getAnnouncementsByType(type: string): Promise<Announcement[]> {
    return Array.from(this.announcements.values())
      .filter(a => a.type === type)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async createAnnouncement(insertAnnouncement: InsertAnnouncement): Promise<Announcement> {
    const id = randomUUID();
    const announcement: Announcement = { 
      ...insertAnnouncement, 
      id,
      date: insertAnnouncement.date || new Date()
    };
    this.announcements.set(id, announcement);
    return announcement;
  }

  // Departments methods
  async getAllDepartments(): Promise<Department[]> {
    return Array.from(this.departments.values()).sort((a, b) => 
      a.name.localeCompare(b.name)
    );
  }

  async getDepartmentById(id: string): Promise<Department | undefined> {
    return this.departments.get(id);
  }

  async createDepartment(insertDepartment: InsertDepartment): Promise<Department> {
    const id = randomUUID();
    const department: Department = { ...insertDepartment, id };
    this.departments.set(id, department);
    return department;
  }
}

export const storage = new MemStorage();
