import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "../Styles/jobs.css";

const Jobs = () => {
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TCS",
      location: "Pune",
      jobType: "Full-time",
      salary: "₹6,00,000 - ₹8,00,000",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Wipro",
      location: "Bengaluru",
      jobType: "Part-time",
      salary: "₹4,50,000 - ₹6,00,000",
      skills: ["Java", "Python", "SQL"],
    },
    {
      id: 3,
      title: "React Developer",
      company: "Payas Technologies PVT.LTD",
      location: "Hadapsar",
      jobType: "Full-time",
      salary: "₹6,00,000 - ₹8,00,000",
      skills: ["React", "Redux", "JavaScript"],
    },
    {
      id: 4,
      title: "Java Developer",
      company: "Intellify Solutions PVT.LTD",
      location: "Pune",
      jobType: "Full-time",
      salary: "₹60,00,000 - ₹80,00,000",
      skills: ["Java", "Spring", "Hibernate"],
    },
    {
      id: 5,
      title: "Python Software Developer",
      company: "Infosys",
      location: "Pune",
      jobType: "Full-time",
      salary: "₹6,00,000 - ₹8,00,000",
      skills: ["Python", "Django", "MySQL"],
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Mumbai",
      jobType: "Full-time",
      salary: "₹52,00,000 - ₹67,00,000",
      skills: ["Adobe XD", "Sketch", "Prototyping"],
    },
    {
      id: 7,
      title: "Data Scientist",
      company: "Data Analytics Inc.",
      location: "Delhi",
      jobType: "Full-time",
      salary: "₹67,00,000 - ₹80,00,000",
      skills: ["Python", "R", "Machine Learning"],
    },
    {
      id: 8,
      title: "Mobile App Developer",
      company: "Mobile Solutions Ltd.",
      location: "Hyderabad",
      jobType: "Full-time",
      salary: "₹60,00,000 - ₹75,00,000",
      skills: ["React Native", "JavaScript", "iOS", "Android"],
    },
    {
      id: 9,
      title: "Data Engineer",
      company: "Big Data Co.",
      location: "Pune",
      jobType: "Full-time",
      salary: "₹75,00,000 - ₹90,00,000",
      skills: ["Python", "SQL", "ETL", "Data Warehousing"],
    },
    {
      id: 10,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Bengaluru",
      jobType: "Full-time",
      salary: "₹67,00,000 - ₹82,00,000",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"],
    },
    {
      id: 11,
      title: "DevOps Engineer",
      company: "Cloud Services Co.",
      location: "Mumbai",
      jobType: "Full-time",
      salary: "₹75,00,000 - ₹97,00,000",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: 12,
      title: "Product Manager",
      company: "Tech Startup",
      location: "Pune",
      jobType: "Full-time",
      salary: "₹90,00,000 - ₹1,12,00,000",
      skills: ["Product Management", "Agile", "UI/UX"],
    },
    // Marketing and Advertising
    {
      id: 13,
      title: "Digital Marketing Specialist",
      company: "Marketing Solutions Inc.",
      location: "Hyderabad",
      jobType: "Full-time",
      salary: "₹52,00,000 - ₹67,00,000",
      skills: ["SEO", "Social Media Marketing", "Google Analytics"],
    },
    {
      id: 14,
      title: "Content Marketing Manager",
      company: "Content Creators Agency",
      location: "Bengaluru",
      jobType: "Full-time",
      salary: "₹60,00,000 - ₹75,00,000",
      skills: ["Content Strategy", "Copywriting", "Campaign Management"],
    },
    // Finance and Accounting
    {
      id: 15,
      title: "Financial Analyst",
      company: "Financial Services Inc.",
      location: "Mumbai",
      jobType: "Full-time",
      salary: "₹60,00,000 - ₹75,00,000",
      skills: ["Financial Modeling", "Budgeting", "Data Analysis"],
    },
    {
      id: 16,
      title: "Accountant",
      company: "Accounting Solutions Ltd.",
      location: "Delhi",
      jobType: "Full-time",
      salary: "₹52,00,000 - ₹67,00,000",
      skills: ["Financial Reporting", "Taxation", "Auditing"],
    },
    // Sales and Business Development
    {
      id: 17,
      title: "Sales Representative",
      company: "Sales Solutions Inc.",
      location: "Bengaluru",
      jobType: "Full-time",
      salary: "₹45,00,000 - ₹60,00,000",
      skills: ["Sales Prospecting", "Negotiation", "CRM"],
    },
    {
      id: 18,
      title: "Business Development Manager",
      company: "Business Expansion Group",
      location: "Delhi",
      jobType: "Full-time",
      salary: "₹67,00,000 - ₹82,00,000",
      skills: [
        "Strategic Planning",
        "Client Relationship Management",
        "Lead Generation",
      ],
    },
    // Healthcare and Medical
    {
      id: 19,
      title: "Registered Nurse",
      company: "Medical Center",
      location: "Hyderabad",
      jobType: "Full-time",
      salary: "₹45,00,000 - ₹60,00,000",
      skills: ["Patient Care", "Medical Documentation", "Critical Thinking"],
    },
    {
      id: 20,
      title: "Medical Doctor",
      company: "Healthcare Services Inc.",
      location: "Mumbai",
      jobType: "Full-time",
      salary: "₹1,12,00,000 - ₹1,49,00,000",
      skills: [
        "Medical Diagnosis",
        "Treatment Planning",
        "Patient Consultation",
      ],
    },

    {
      id: 21,
      title: "Elementary School Teacher",
      company: "Public School District",
      location: "Bengaluru",
      jobType: "Full-time",
      salary: "₹37,00,000 - ₹52,00,000",
      skills: ["Lesson Planning", "Classroom Management", "Student Assessment"],
    },
    {
      id: 22,
      title: "High School Math Teacher",
      company: "Private School",
      location: "Delhi",
      jobType: "Full-time",
      salary: "₹45,00,000 - ₹60,00,000",

      skills: [
        "Mathematics Instruction",
        "Curriculum Development",
        "Student Mentoring",
      ],
    },
    // Design and Creative
    {
      id: 23,
      title: "Graphic Designer",
      company: "Creative Agency",
      location: "Mumbai",
      jobType: "Full-time",
      salary: "₹37,00,000 - ₹52,00,000",
      skills: ["Adobe Creative Suite", "Typography", "Visual Communication"],
    },
    {
      id: 24,
      title: "Art Director",
      company: "Advertising Agency",
      location: "Hyderabad",
      jobType: "Full-time",
      salary: "₹60,00,000 - ₹75,00,000",
      skills: ["Creative Strategy", "Campaign Development", "Team Management"],
    },

    {
      id: 25,
      title: "Hotel Manager",
      company: "Luxury Resort",
      location: "Delhi",
      jobType: "Full-time",
      salary: "₹52,00,000 - ₹67,00,000",
      skills: [
        "Operations Management",
        "Customer Service",
        "Revenue Optimization",
      ],
    },
    {
      id: 26,
      title: "Tour Guide",
      company: "Travel Agency",
      location: "Delhi",
      jobType: "Part-time",
      salary: "₹1,500 - ₹2,000 per hour",
      skills: ["Local Knowledge", "Storytelling", "Multilingual"],
    },
    // Human Resources
    {
      id: 27,
      title: "HR Manager",
      company: "Global Corporation",
      location: "Pune",
      jobType: "Full-time",
      salary: "₹67,00,000 - ₹82,00,000",
      skills: ["Employee Relations", "Recruitment", "Performance Management"],
    },
    {
      id: 28,
      title: "Talent Acquisition Specialist",
      company: "Tech Startup",
      location: "Hyderabad",
      jobType: "Full-time",
      salary: "₹5,60,000 - ₹7,20,000",
      skills: ["Sourcing", "Interviewing", "Candidate Assessment"],
    },
  ];
  return (
    <div>
      <h1>Recommended Jobs for You</h1>
      <div className="job-listings-container">
        {jobListings.map((job) => (
          <div key={job.id} className="job-listing">
            <h2>{job.title}</h2>
            <p className="company">Company: {job.company}</p>
            <p className="location">Location: {job.location}</p>
            <p className="job-type">Job Type: {job.jobType}</p>
            <p className="salary">Salary: {job.salary}</p>
            <div className="skills">
              Skills:{" "}
              {job.skills.map((skill, index) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
            <Link to="/update-and-apply">
              <Button className="apply-button">Apply</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
