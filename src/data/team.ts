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
    name: "Jatin",
    projects: [
      {
        title: "Business Analytics Dashboard",
        category: "Dashboard",
        description:
          "Interactive analytics dashboard for business insights and reporting.",
        link: "https://bchsj4idn4eb3z2qupwesv.streamlit.app/",
      },
      {
        title: "Abnormal Data Point Visualizer",
        category: "EDA",
        description:
          "Visual analytics platform for anomaly and outlier detection.",
        link: "https://abnormal-data-points-visually-kvlb2nyqtuzmsrjk6q7qmq.streamlit.app/",
      },
    ],
  },

  {
    id: 4,
    name: "Praful",
    projects: [
      {
        title: "HypothesisLab AI",
        category: "Machine Learning",
        description:
          "AI-powered statistical hypothesis testing platform.",
        link: "https://prafulhypothesislab.streamlit.app/",
      },
    ],
  },

  {
    id: 5,
    name: "Tushar",
    projects: [
      {
        title: "Smart City Analytics System",
        category: "Business Intelligence",
        description:
          "Smart city monitoring and analytics platform.",
        link: "https://tushar7188.github.io/Smart-City-Analytics-System/",
      },
    ],
  },

  {
    id: 6,
    name: "Utkarsh",
    projects: [
      {
        title: "Retail Analyze",
        category: "Data Analytics",
        description:
          "Retail sales and customer analytics platform.",
        link: "https://retailanalyse.streamlit.app/",
      },
    ],
  },

  {
    id: 7,
    name: "Himanshu Gaur",
    projects: [
      {
        title: "SegmentX Analytics",
        category: "Machine Learning",
        description:
          "Customer segmentation and analytics application.",
        link: "https://segmentx-dldjggapjpaxksprfty2ko.streamlit.app/",
      },
      {
        title: "HypothesisLab AI Advanced",
        category: "AI Analytics",
        description:
          "Advanced AI-powered hypothesis analysis system.",
        link: "https://hypothesislabai-bobmj9vgqempkbtwy6shri.streamlit.app/",
      },
    ],
  },

  {
    id: 8,
    name: "Kanishak",
    projects: [
      {
        title: "RegressionX",
        category: "Machine Learning",
        description:
          "Regression analysis and predictive modeling platform.",
        link: "https://regressionx-regression-analysis.streamlit.app/",
      },
      {
        title: "Online Examination Analytics",
        category: "Dashboard",
        description:
          "Online exam management and analytics application.",
        link: "https://online-exam-appgit-vowtmzzuyv2tzzrxbnuyju.streamlit.app/",
      },
      {
        title: "Fake News Detection Analytics",
        category: "Machine Learning",
        description:
          "AI-based fake news detection system.",
        link: "https://fake-news-detection-analyticsgit.streamlit.app/",
      },
    ],
  },

  {
    id: 9,
    name: "Arun Ramamwat",
    projects: [
      {
        title: "Social Media Dashboard",
        category: "Dashboard",
        description:
          "Social media engagement and analytics dashboard.",
        link: "https://social-media-dashboard-5b2hcrs6ozpfztzugkscwt.streamlit.app/",
      },
    ],
  },

  {
    id: 10,
    name: "Nikhil Purohit",
    projects: [
      {
        title: "Event Management Analytics",
        category: "Business Intelligence",
        description:
          "Analytics system for event management and tracking.",
        link: "https://evenmanagemen-aqe4pvjbxl7rnnlcmvbta7.streamlit.app/",
      },
      {
        title: "Abnormal Data Point Visualizer",
        category: "EDA",
        description:
          "Visual analytics platform for anomaly and outlier detection.",
        link: "https://abnormal-data-points-visually-kvlb2nyqtuzmsrjk6q7qmq.streamlit.app/",
      },
    ],
  },

  {
    id: 11,
    name: "Sachin",
    projects: [
      {
        title: "Battery Health Analytics",
        category: "Data Analytics",
        description:
          "Battery health monitoring and predictive analytics.",
        link: "https://batteryhealth-eb9568ytdnp6wzrbp33mep.streamlit.app/",
      },
      {
        title: "Global Conflicts Dashboard",
        category: "Dashboard",
        description:
          "Interactive geopolitical conflicts analytics dashboard.",
        link: "https://globalconflictsdashboard-dpnxvjmtm69bhhrvc5pw5i.streamlit.app/",
      },
    ],
  },

  {
    id: 12,
    name: "Tarannum",
    projects: [
      {
        title: "Explora AI",
        category: "AI Analytics",
        description:
          "AI-powered data exploration and analytics assistant.",
        link: "https://exploraai.streamlit.app/",
      },
    ],
  },

  {
    id: 13,
    name: "Pushkar",
    projects: [
      {
        title: "AI Data Cleaner",
        category: "Python",
        description:
          "Automated AI data cleaning and preprocessing tool.",
        link: "https://ai-data-cleaner-e27awhyvqtfhhlavto4duz.streamlit.app/",
      },
    ],
  },

  {
    id: 14,
    name: "Garvit Sharma",
    projects: [
      {
        title: "Geo EDA Analyzer",
        category: "EDA",
        description:
          "Geospatial exploratory data analysis platform.",
        link: "https://geo-eda-analyser-nzbtc2ukfugwhyd76oyngd.streamlit.app/",
      },
      {
        title: "Food Delivery Analytics",
        category: "Business Intelligence",
        description:
          "Food delivery insights and analytics dashboard.",
        link: "https://food-delivery-analytics-app-ccuffqfuivmdjhfbkesdzm.streamlit.app/",
      },
    ],
  },

  {
    id: 15,
    name: "Vinit Solanki",
    projects: [
      {
        title: "ESG Carbon Footprint Tracker",
        category: "Dashboard",
        description:
          "ESG analytics and carbon footprint tracking platform.",
        link: "https://esg-carbon-footprint-tracker.streamlit.app/",
      },
    ],
  },

  {
    id: 16,
    name: "Shruti",
    projects: [
      {
        title: "Hospital Dashboard",
        category: "Healthcare Analytics",
        description:
          "Healthcare and hospital analytics dashboard.",
        link: "https://hospitaldashboardswasthikbyshruti.streamlit.app/",
      },
      {
        title: "Architecture Visualization Analytics",
        category: "Visualization",
        description:
          "Architectural visualization and analytical insights platform.",
        link: "https://shrutisikhwalss-arch-kantvisualize-app-jbfbob.streamlit.app/",
      },
    ],
  },

  {
    id: 17,
    name: "Aarsdeep",
    projects: [
      {
        title: "Social Media Analyzer",
        category: "AI Analytics",
        description:
          "Advanced social media analytics and AI insights platform.",
        link: "https://social-media-analyzer-6lul.onrender.com/",
      },
      {
        title: "CurioViz",
        category: "Data Visualization",
        description:
          "Interactive visual storytelling and data exploration platform.",
        link: "https://curioviz.netlify.app/",
      },
    ],
  },

  {
    id: 18,
    name: "Sanvi",
    projects: [
      {
        title: "Cleanora AI",
        category: "Python",
        description:
          "AI-powered smart data cleaning platform.",
        link: "https://cleanora-ai-k6n86kcasjehou7etlwnih.streamlit.app/",
      },
    ],
  },

  {
    id: 19,
    name: "Priyanka",
    projects: [
      {
        title: "Smart Traffic Analysis",
        category: "Smart Analytics",
        description:
          "Traffic monitoring and smart analytics platform.",
        link: "https://smart-trafic-analysis-gf5eucytj9vmyg5utbehbn.streamlit.app/",
      },
      {
        title: "SupplyIQ",
        category: "Supply Chain Analytics",
        description:
          "Supply chain intelligence and analytics dashboard.",
        link: "https://supplyiq-hggrg9cvdvpqbjibffume3.streamlit.app/",
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
