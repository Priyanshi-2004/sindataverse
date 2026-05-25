// ─────────────────────────────────────────────────────────────
//  DataVerse Team Data
//  Edit this file to update the Team and Connect sections.
// ─────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
}

export interface TeamMember {
  id: number;
  name: string;
  projects: Project[];
}

export interface Official {
  id: number;
  name: string;
  role: string;
  designation: string;
  badge: string; // emoji or short label
}

// ── Officials ──────────────────────────────────────────────────

export const officials: Official[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    role: "Program Director",
    designation: "Head of Data Science Division",
    badge: "DIRECTOR",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Lead Instructor",
    designation: "Senior Data Engineer",
    badge: "LEAD",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Mentor",
    designation: "ML Research Specialist",
    badge: "MENTOR",
  },
  {
    id: 4,
    name: "Vikram Nair",
    role: "Coordinator",
    designation: "Project & Community Manager",
    badge: "COORD",
  },
];

// ── Team Members ───────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ajay Saini",
    projects: [
      {
        title: "Central Knowledge Repository",
        category: "Data Management",
        description:
          "A smart library management system powered by AI for cataloguing and retrieval.",
        link: "https://librarymanagement-zp2whzkoeadbzmfpylggsp.streamlit.app/",
      },
    ],
  },
  {
    id: 2,
    name: "Piyush",
    projects: [
      {
        title: "CleanAI Dataset Cleaner",
        category: "Machine Learning",
        description:
          "Automated AI-powered dataset cleaning and preprocessing pipeline.",
        link: "https://dataset-cleaning-ai-lpda9lt39rr9yhzcu25jux.streamlit.app/",
      },
    ],
  },
  {
    id: 3,
    name: "Riya Kapoor",
    projects: [
      {
        title: "Sales Intelligence Dashboard",
        category: "Power BI",
        description:
          "Interactive Power BI dashboard for end-to-end sales funnel analysis.",
        link: "#",
      },
      {
        title: "Customer Churn Predictor",
        category: "Machine Learning",
        description:
          "ML model predicting customer churn with 92% accuracy on telecom data.",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Arjun Verma",
    projects: [
      {
        title: "Supply Chain Optimizer",
        category: "Python Analytics",
        description:
          "End-to-end supply chain optimization using Python and linear programming.",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    name: "Sneha Reddy",
    projects: [
      {
        title: "Healthcare Analytics Suite",
        category: "Tableau",
        description:
          "Tableau story revealing patient outcome trends across 10 hospitals.",
        link: "#",
      },
      {
        title: "Sentiment Radar",
        category: "NLP",
        description:
          "Real-time Twitter sentiment analysis using BERT and Streamlit.",
        link: "#",
      },
    ],
  },
  {
    id: 6,
    name: "Karan Singh",
    projects: [
      {
        title: "Financial Risk Model",
        category: "SQL & Python",
        description:
          "Credit risk modelling using SQL pipelines and scikit-learn.",
        link: "#",
      },
    ],
  },
  {
    id: 7,
    name: "Meera Joshi",
    projects: [
      {
        title: "E-Commerce Recommendation Engine",
        category: "Machine Learning",
        description:
          "Collaborative filtering recommendation engine with live product data.",
        link: "#",
      },
    ],
  },
  {
    id: 8,
    name: "Devraj Pillai",
    projects: [
      {
        title: "Climate Data Explorer",
        category: "Data Visualization",
        description:
          "Interactive globe visualisation of 50 years of climate datasets.",
        link: "#",
      },
      {
        title: "Air Quality Forecaster",
        category: "Time Series",
        description:
          "LSTM-based AQI forecasting model for 15 Indian cities.",
        link: "#",
      },
    ],
  },
  {
    id: 9,
    name: "Tanvi Shah",
    projects: [
      {
        title: "HR Attrition Dashboard",
        category: "Power BI",
        description:
          "Power BI dashboard revealing hidden patterns in employee attrition.",
        link: "#",
      },
    ],
  },
  {
    id: 10,
    name: "Rohan Das",
    projects: [
      {
        title: "Stock Market Pulse",
        category: "Python Analytics",
        description:
          "Live stock screener and technical indicator dashboard.",
        link: "#",
      },
    ],
  },
  {
    id: 11,
    name: "Nisha Pandey",
    projects: [
      {
        title: "Social Media Analytics Hub",
        category: "Data Engineering",
        description:
          "Aggregated cross-platform analytics with automated ETL pipelines.",
        link: "#",
      },
      {
        title: "Influencer Score Model",
        category: "Machine Learning",
        description:
          "Scoring model that ranks influencer ROI for marketing teams.",
        link: "#",
      },
    ],
  },
  {
    id: 12,
    name: "Aditya Khanna",
    projects: [
      {
        title: "Road Accident Analysis",
        category: "Tableau",
        description:
          "Geospatial Tableau viz mapping accident hotspots across Indian highways.",
        link: "#",
      },
    ],
  },
];

// ─── Org metadata ────────────────────────────────────────────
export const orgMeta = {
  name: "DataVerse",
  tagline: "Powered by Innovation • Built by Future Data Analysts",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "mailto:hello@dataverse.dev",
  projectCount: teamMembers.reduce((s, m) => s + m.projects.length, 0),
  memberCount: teamMembers.length,
};
