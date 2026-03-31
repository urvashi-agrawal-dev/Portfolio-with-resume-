import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Urvashi Agrawal",
  initials: "UA",
  url: "https://urvashi-agrawal.dev",
  location: "New Delhi, India",
  description:
    "Full Stack Developer & AI/ML Engineer building scalable web applications and intelligent systems and sharing on X.",
  summary:
    "I'm a MERN-focused Full Stack Developer and AI/ML Engineer with hands-on experience in building real-world AI systems, scalable web applications, and mentoring students. I have won 5+ hackathons and worked with startups to develop practical machine learning solutions. My focus is on combining strong engineering with applied AI to solve real-world problems.",
  avatarUrl: "/PASSportsiz (1).jpeg",
  skills: [
    "Java",
    "Python",
    "TypeScript",
    "Reactjs",
    "SQL",
    "Git/GitHub",
    "AWS",
    "Azure",
    "React.js",
    "Node.js",
    "Express.js",
    "Machine Learning",
    "GenAI",
    "AgenticAI",
    "MongoDB",
    "Docker"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "urvashiagrawal146@gmail.com",
    tel: "+91900000000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/urvashi-agrawal-dev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uraviva",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "Twitter",
        url: "https://x.com/UraViva_",
        icon: Icons.x,
        navbar: true,
      },
       Medium: {
        name: "Medium",
        url: "https://medium.com/@urvashivdjs10b",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:urvashiagrawal146@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  availability: {
    status: "Available",
    message: "Open to internships, freelance projects, and full-time opportunities",
  },

  work: [
    {
      company: "OkDriver Smart Dashcams Pvt. Ltd.",
      href: "https://okdriver.com",

      badges: ["Internship"],
      location: "Delhi, India",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/okdriver.png",
      start: "May 2025",
      end: "July 2025",
      description:
        "Integrated lightweight computer vision models using YOLO, Haar Cascades, and landmark detection optimized for edge devices like Raspberry Pi and Android. Annotated real-world driving datasets and contributed to building a bilingual conversational AI system for in-car safety alerts.",
    },
    {
      company: "SkillHigh Edu Technologies LLP",
      href: "https://skillhigh.com",
      badges: ["Internship"],
      location: "Remote",
      title: "AI/ML & Data Science Mentor",
      logoUrl: "/skillhigh.png",
      start: "July 2025",
      end: "February 2026",
      description:
        "Mentored 100+ students in AI/ML, Data Science, and Analytics. Conducted live sessions, solved queries, and guided students in building real-world projects.",
    },
  ],
  education: [
    {
      school: "GLA University",
      href: "https://glauniversity.in",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/gla.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Deepfake Video Detection System",
      href: "https://t87-deepfake-video-detection-system.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Built a real-time deepfake detection system using Vision Transformer (ViT) with temporal and frequency-based video analysis. Developed FastAPI backend and Next.js frontend with multi-stage AI pipelines.",
      technologies: [
        "Python",
        "FastAPI",
        "Node.js",
        "Vision Transformer",
        "MongoDB"
      ],
      links: [
        {
          type: "Website",
          href: "https://t87-deepfake-video-detection-system.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/urvashi-agrawal-dev/T87-Deepfake-Video-Detection-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/deepfake.png",
      video: "",
    },
    {
      title: "RetroGhost",
      href: "https://kiroween.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Created an interactive CRT-style terminal simulating legacy systems like MS-DOS and UNIX using React and AI personas with real-time command emulation.",
      technologies: [
        "React",
        "Vite",
        "AgenticAI",
        "JavaScript",
        "Expressjs",
      ],
      links: [
        {
          type: "Website",
          href: "https://kiroween.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/urvashi-agrawal-dev/kiroween",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/retroghost.png",
      video: "",
    },
    {
      title: "Raj Shamani Website",
      href: "https://rajshamani.page/",
      dates: "2025",
      active: true,
      description:
        "Designed a premium personal brand website with animations, podcast sections, stats, and modern UI/UX using Next.js and Tailwind.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "JavaScript",
        "Git/GitHub",
        "AI Agents"
      ],
      links: [
        {
          type: "Website",
          href: "https://rajshamani.page/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/urvashi-agrawal-dev/RajShamaniWebsite",
          icon: <Icons.github className="size-3" />,
        },
       
      ],
      image: "/raj.png",
      video: "",
    },
  ],
  achievements: [
    "Winner of 5+ Hackathons",
    "Mentor at SSOC",
    "Contributor at Hacktoberfest & GSSoC",
  ],
  certifications: [
    "AWS Educate Cloud Computing",
    "Python Development Essentials - Udemy",
    "Data Science - Simplilearn",
    "Ubuntu Linux - Udemy",
    "Generative AI - LinkedIn",
    "Introduction to AI - LinkedIn",
  ],
} as const;
