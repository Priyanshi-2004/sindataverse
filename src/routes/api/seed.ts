import { createFileRoute } from "@tanstack/react-router";
import { connectToDatabase } from "../../lib/db";
import { Project } from "../../lib/models/project";
import { TeamMember } from "../../lib/models/teamMember";
import { Official } from "../../lib/models/official";
import { Inquiry } from "../../lib/models/inquiry";

// Import offline static data
import { projects as staticProjects } from "../../data/projects";

const staticOfficials = [
  {
    id: 1,
    name: "Manish Bafna",
    role: "Director & Registrar",
    designation: "Registrar , JIET Universe",
    badge: "CHIEF PATRON",
  },
  {
    id: 2,
    name: "Sanjay Bhandari",
    role: "Training & Placement Officer",
    designation: "TPO",
    badge: "TPO",
  },
  {
    id: 3,
    name: "Laxmi Choudhary",
    role: "Coordinator",
    designation: "Data Analytics course coordinator",
    badge: "COORD",
  },
];

const staticTeamMembers = [
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

export const Route = createFileRoute("/api/seed")({
  server: {
    handlers: {
      // ── GET /api/seed ──────────────────────────────────────────────
      // Postman: GET http://localhost:3000/api/seed
      // Invoking this endpoint once will clear and seed the entire MongoDB Atlas database
      GET: async ({ request }) => {
        try {
          await connectToDatabase();

          // 1. Clear existing collections
          await Project.deleteMany({});
          await TeamMember.deleteMany({});
          await Official.deleteMany({});
          // We can optionally keep inquiries, or clear them. Let's keep inquiries so they aren't lost, or just reset them. Let's keep inquiries unless requested.

          // 2. Seed Projects
          // Map static projects to DB schema
          const projectsToInsert = staticProjects.map(proj => ({
            title: proj.title,
            category: proj.category,
            difficulty: proj.difficulty,
            description: proj.description,
            longDescription: proj.longDescription,
            technologies: proj.technologies,
            features: proj.features,
            image: proj.image,
            github: proj.github,
            demo: proj.demo,
            featured: proj.featured || false,
            trending: proj.trending || false,
          }));
          const seededProjects = await Project.insertMany(projectsToInsert);

          // 3. Seed Officials
          const officialsToInsert = staticOfficials.map(off => ({
            name: off.name,
            role: off.role,
            designation: off.designation,
            badge: off.badge,
          }));
          const seededOfficials = await Official.insertMany(officialsToInsert);

          // 4. Seed Team Members
          const teamMembersToInsert = staticTeamMembers.map(member => ({
            name: member.name,
            projects: member.projects.map(proj => ({
              title: proj.title,
              category: proj.category,
              description: proj.description,
              link: proj.link,
            })),
          }));
          const seededTeamMembers = await TeamMember.insertMany(teamMembersToInsert);

          return Response.json({
            success: true,
            message: "Database seeded successfully into MongoDB Atlas!",
            counts: {
              projects: seededProjects.length,
              officials: seededOfficials.length,
              teamMembers: seededTeamMembers.length,
            }
          });
        } catch (err: any) {
          return Response.json({ success: false, error: err.message }, { status: 500 });
        }
      },
    },
  },
});
