/* EDIT THIS FILE: everything on the site comes from here. Replace every [bracketed] placeholder with your real details. */
const PROFILE = {
  name: "AIZEL JADE B. BIÑAR",
  title: "Information Technology Student",
  status: "4th Year BSIT Student | Aspiring Data Analyst",
  intro: "Hi, I'm Aizel Jade B. Biñar, a 4th year BSIT student at Datamex College of Saint Adeline in Parañaque City, Philippines. I enjoy working with data, finding the story in the numbers and keeping records accurate and organized. I'm training to become a data analyst and aim to specialize as an encoder.",
  about1: "I'm a 4th year Bachelor of Science in Information Technology student at Datamex College of Saint Adeline in Parañaque City, Philippines. I chose IT because I like turning raw information into something people can understand and use. I pay close attention to detail, and I take pride in entering, checking and organizing data correctly, because one small error can change a whole report. In my studies I've worked with Excel for data analysis, and I've built a foundation in SQL and MySQL for storing and querying data. I've also learned Python and web basics, and I use Git and GitHub to keep my work organized.",
  about2: "I'm patient and careful, and I keep practicing until I get things right. My goal is to start as a data analyst, building skills in data cleaning, spreadsheets, databases and reporting. Over time I want to specialize as an encoder, someone people trust for fast, accurate and well-organized data. This portfolio shows what I've learned so far and where I'm headed.",
  objective: "To start my career as a data analyst, building skills in data cleaning, spreadsheets, databases and reporting, and to specialize over time as an encoder who delivers fast, accurate and well-organized data.",
  email: "binaraizeljade4@gmail.com",
  interests: ["Data analysis", "Excel and SQL databases", "Accurate data encoding"],
  facts: { Program: "BSIT", School: "Datamex College of Saint Adeline", Year: "4th year", Location: "Parañaque City, Philippines" },
  roles: ["Data Analyst", "Data Encoder"],
  links: [
    ["Email", "mailto:binaraizeljade4@gmail.com", "binaraizeljade4@gmail.com"],
    ["GitHub", "https://binaraizeljade4-stack.github.io/pooww/", "binaraizeljade4-stack.github.io/pooww"],
    ["LinkedIn", "https://www.linkedin.com/in/your-profile", "linkedin.com/in/your-profile"]
  ]
};
const TIMELINE = [
  { when: "[Years]", title: "Bachelor of Science in Information Technology", sub: "Datamex College of Saint Adeline. Add honors or achievements here." },
  { when: "[Dates]", title: "[Internship or work experience, if any]", sub: "[Company and what you did. Delete this item if you have none.]" },
  { when: "[Date]", title: "[Seminar or training attended]", sub: "[Organizer and topics covered. Delete if none.]" }
];
/* Level: 0 to 100. Keep only skills you really have. */
const SKILLS = [
  { cat: "Database", n: "MySQL and SQL", l: 20 },
  { cat: "Systems", n: "Networking and troubleshooting", l: 55 }, { cat: "Systems", n: "Computer hardware and software", l: 60 },
  { cat: "Security", n: "Cybersecurity fundamentals", l: 40 },
  { cat: "Data", n: "Data analysis in Excel", l: 55 },
  { cat: "Tools", n: "Git and GitHub", l: 45 }
];
const PROJECTS = [
  { t: "Food Website (Mesa Kitchen)", d: "A simple restaurant website with a filterable menu and a working order tray.", obj: "Let visitors browse a menu by category and build an order with a running total.", tech: ["HTML", "CSS", "JavaScript"], img: "assets/food-website.jpg", code: "", demo: "projects/food-website/" },
  { t: "Personal Portfolio Website", d: "Sample: this responsive portfolio.", obj: "Present my skills and work in one professional page.", tech: ["HTML", "CSS", "JavaScript"], img: "", code: "", demo: "" },
];
const CASES = [
  { t: "No internet connection", p: "A computer cannot reach websites.", c: "Loose cable, disabled adapter, wrong IP settings, DNS failure, router fault.", s: "Check the cable and adapter. Run ipconfig /all. Ping the gateway, then 8.8.8.8, then a website name to find which step fails.", f: "Renew the IP with ipconfig /release and /renew, flush DNS with ipconfig /flushdns, or set a working DNS server.", l: "[Write what you learned.]" },
  { t: "Slow computer", p: "A PC is slow or freezes.", c: "Heavy background programs, low memory, full or failing disk, malware.", s: "Open Task Manager. Sort by CPU, Memory and Disk to find the heavy process. Check free disk space.", f: "End non-essential tasks, remove startup items, free disk space, scan for malware.", l: "[Write what you learned.]" },
  { t: "Printer not printing", p: "A printer is offline or jobs stay in the queue.", c: "Cable or Wi-Fi problem, changed printer IP, stuck queue, driver fault.", s: "Check power and cable. Ping the printer IP. A reply points to the driver or queue. A timeout points to the network.", f: "Clear the print queue, reinstall the driver, or restore the printer IP, then print a test page.", l: "[Write what you learned.]" },
  { t: "Database connection error", p: "An application cannot connect to MySQL.", c: "Service stopped, wrong host or port, wrong credentials, missing permissions.", s: "Confirm the MySQL service is running. Test the login in a client. Check host, port and user privileges.", f: "Start the service and correct the connection settings or user rights.", l: "[Write what you learned.]" },
  { t: "Suspicious login or phishing email", p: "A user reports an unexpected password-reset email.", c: "Phishing attempt or leaked password.", s: "Inspect the sender and links without clicking. Check the account's recent sign-in activity.", f: "Change the password, enable two-factor authentication, report and delete the email.", l: "[Write what you learned.]" }
];
