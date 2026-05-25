export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Project {
  id: number;
  title: string;
  category: string;
  difficulty: Difficulty;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  trending?: boolean;
}

// To add a new project, just append an object to this array.
// The site will pick it up automatically.
export const projects: Project[] = [
  {
    id: 1,
    title: "Central Knowledge Repository",
    category: "Streamlit",
    difficulty: "Beginner",
    description: "Modern library management and knowledge repository system.",
    technologies: ["Python", "Streamlit"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://librarymanagement-zp2whzkoeadbzmfpylggsp.streamlit.app/",
    featured: true,
    trending: true,
  },

  {
    id: 2,
    title: "CleanAI Dataset Cleaner",
    category: "Python",
    difficulty: "Intermediate",
    description: "AI-powered dataset cleaning and preprocessing platform.",
    technologies: ["Python", "Pandas", "Streamlit"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://dataset-cleaning-ai-lpda9lt39rr9yhzcu25jux.streamlit.app/",
    featured: true,
  },

  {
    id: 3,
    title: "Business Analytics Dashboard",
    category: "Dashboard",
    difficulty: "Beginner",
    description: "Interactive business insights and analytics dashboard.",
    technologies: ["Python", "Analytics", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1551288049-1c89ff8a3c7b?w=1200&q=80&auto=format&fit=crop",
    demo: "https://bchsj4idn4eb3z2qupwesv.streamlit.app/",
  },

  {
    id: 4,
    title: "Abnormal Data Point Visualizer",
    category: "EDA",
    difficulty: "Advanced",
    description: "Visual analytics platform for anomaly and outlier detection.",
    technologies: ["Python", "EDA", "Visualization"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://abnormal-data-points-visually-kvlb2nyqtuzmsrjk6q7qmq.streamlit.app/",
    trending: true,
  },

  {
    id: 5,
    title: "HypothesisLab AI",
    category: "Machine Learning",
    difficulty: "Advanced",
    description: "AI-powered statistical hypothesis testing platform.",
    technologies: ["Machine Learning", "Python", "Statistics"],
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&q=80&auto=format&fit=crop",
    demo: "https://prafulhypothesislab.streamlit.app/",
  },

  {
    id: 6,
    title: "Smart City Analytics System",
    category: "Business Intelligence",
    difficulty: "Advanced",
    description: "Smart city monitoring and analytics platform.",
    technologies: ["Analytics", "Dashboard", "Visualization"],
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://tushar7188.github.io/Smart-City-Analytics-System/",
    featured: true,
  },

  {
    id: 7,
    title: "Retail Analyze",
    category: "Data Analytics",
    difficulty: "Intermediate",
    description: "Retail sales and customer analytics platform.",
    technologies: ["Python", "Analytics", "Visualization"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80&auto=format&fit=crop",
    demo: "https://retailanalyse.streamlit.app/",
  },

  {
    id: 8,
    title: "SegmentX Analytics",
    category: "Machine Learning",
    difficulty: "Advanced",
    description: "Customer segmentation and analytics application.",
    technologies: ["Machine Learning", "Python", "Segmentation"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://segmentx-dldjggapjpaxksprfty2ko.streamlit.app/",
  },

  {
    id: 9,
    title: "HypothesisLab AI Advanced",
    category: "Machine Learning",
    difficulty: "Advanced",
    description: "Advanced AI-powered hypothesis analysis system.",
    technologies: ["AI", "Statistics", "Python"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://hypothesislabai-bobmj9vgqempkbtwy6shri.streamlit.app/",
  },

  {
    id: 10,
    title: "RegressionX",
    category: "Machine Learning",
    difficulty: "Intermediate",
    description: "Regression analysis and predictive modeling platform.",
    technologies: ["Regression", "Python", "ML"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://regressionx-regression-analysis.streamlit.app/",
  },

  {
    id: 11,
    title: "Online Examination Analytics",
    category: "Dashboard",
    difficulty: "Beginner",
    description: "Online exam management and analytics application.",
    technologies: ["Analytics", "Dashboard", "Python"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://online-exam-appgit-vowtmzzuyv2tzzrxbnuyju.streamlit.app/",
  },

  {
    id: 12,
    title: "Fake News Detection Analytics",
    category: "Machine Learning",
    difficulty: "Advanced",
    description: "AI-based fake news detection and analytics system.",
    technologies: ["NLP", "Machine Learning", "Python"],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://fake-news-detection-analyticsgit.streamlit.app/",
    featured: true,
  },

  {
    id: 13,
    title: "Social Media Dashboard",
    category: "Dashboard",
    difficulty: "Beginner",
    description: "Social media engagement and analytics dashboard.",
    technologies: ["Dashboard", "Analytics", "Visualization"],
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://social-media-dashboard-5b2hcrs6ozpfztzugkscwt.streamlit.app/",
  },

  {
    id: 14,
    title: "Event Management Analytics",
    category: "Business Intelligence",
    difficulty: "Intermediate",
    description: "Analytics system for event management and tracking.",
    technologies: ["Analytics", "Dashboard", "Management"],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://evenmanagemen-aqe4pvjbxl7rnnlcmvbta7.streamlit.app/",
  },

  {
    id: 15,
    title: "Battery Health Analytics",
    category: "Data Analytics",
    difficulty: "Advanced",
    description: "Battery health monitoring and predictive analytics.",
    technologies: ["Analytics", "Python", "ML"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://batteryhealth-eb9568ytdnp6wzrbp33mep.streamlit.app/",
  },

  {
    id: 16,
    title: "Global Conflicts Dashboard",
    category: "Dashboard",
    difficulty: "Intermediate",
    description: "Interactive geopolitical conflicts analytics dashboard.",
    technologies: ["Visualization", "Dashboard", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://globalconflictsdashboard-dpnxvjmtm69bhhrvc5pw5i.streamlit.app/",
  },

  {
    id: 17,
    title: "Explora AI",
    category: "AI Analytics",
    difficulty: "Intermediate",
    description: "AI-powered data exploration and analytics assistant.",
    technologies: ["AI", "Python", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
    demo: "https://exploraai.streamlit.app/",
  },

  {
    id: 18,
    title: "AI Data Cleaner",
    category: "Python",
    difficulty: "Beginner",
    description: "Automated AI data cleaning and preprocessing tool.",
    technologies: ["Python", "AI", "Data Cleaning"],
    image:
      "https://images.unsplash.com/photo-1516321310764-8d2f4e89ff5d?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://ai-data-cleaner-e27awhyvqtfhhlavto4duz.streamlit.app/",
  },

  {
    id: 19,
    title: "Geo EDA Analyzer",
    category: "EDA",
    difficulty: "Advanced",
    description: "Geospatial exploratory data analysis platform.",
    technologies: ["EDA", "Geo Analytics", "Python"],
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://geo-eda-analyser-nzbtc2ukfugwhyd76oyngd.streamlit.app/",
  },

  {
    id: 20,
    title: "Food Delivery Analytics",
    category: "Business Intelligence",
    difficulty: "Intermediate",
    description: "Food delivery insights and performance analytics dashboard.",
    technologies: ["Analytics", "Dashboard", "Python"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://food-delivery-analytics-app-ccuffqfuivmdjhfbkesdzm.streamlit.app/",
  },

  {
    id: 21,
    title: "ESG Carbon Footprint Tracker",
    category: "Dashboard",
    difficulty: "Advanced",
    description: "ESG analytics and carbon footprint tracking platform.",
    technologies: ["ESG", "Analytics", "Visualization"],
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://esg-carbon-footprint-tracker.streamlit.app/",
  },

  {
    id: 22,
    title: "Hospital Dashboard",
    category: "Healthcare Analytics",
    difficulty: "Beginner",
    description: "Healthcare and hospital analytics dashboard.",
    technologies: ["Dashboard", "Healthcare", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://hospitaldashboardswasthikbyshruti.streamlit.app/",
  },

  {
    id: 23,
    title: "Architecture Visualization Analytics",
    category: "Visualization",
    difficulty: "Intermediate",
    description: "Architectural visualization and analytical insights platform.",
    technologies: ["Visualization", "Design", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://shrutisikhwalss-arch-kantvisualize-app-jbfbob.streamlit.app/",
  },

  {
    id: 24,
    title: "Social Media Analyzer",
    category: "AI Analytics",
    difficulty: "Advanced",
    description: "Advanced social media analytics and AI insights platform.",
    technologies: ["AI", "Analytics", "Visualization"],
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://social-media-analyzer-6lul.onrender.com/",
  },

  {
    id: 25,
    title: "CurioViz",
    category: "Data Visualization",
    difficulty: "Beginner",
    description: "Interactive visual storytelling and data exploration platform.",
    technologies: ["Visualization", "Charts", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1551288049-1c89ff8a3c7b?w=1200&q=80&auto=format&fit=crop",
    demo: "https://curioviz.netlify.app/",
  },

  {
    id: 26,
    title: "Cleanora AI",
    category: "Python",
    difficulty: "Beginner",
    description: "AI-powered smart data cleaning platform.",
    technologies: ["AI", "Python", "Data Cleaning"],
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://cleanora-ai-k6n86kcasjehou7etlwnih.streamlit.app/",
  },

  {
    id: 27,
    title: "Smart Traffic Analysis",
    category: "Smart Analytics",
    difficulty: "Advanced",
    description: "Traffic monitoring and smart analytics platform.",
    technologies: ["Analytics", "Visualization", "AI"],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://smart-trafic-analysis-gf5eucytj9vmyg5utbehbn.streamlit.app/",
  },

  {
    id: 28,
    title: "SupplyIQ",
    category: "Supply Chain Analytics",
    difficulty: "Advanced",
    description: "Supply chain intelligence and analytics dashboard.",
    technologies: ["Supply Chain", "Analytics", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop",
    demo:
      "https://supplyiq-hggrg9cvdvpqbjibffume3.streamlit.app/",
    featured: true,
    trending: true,
  },
];
