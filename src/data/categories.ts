import { SiPython } from "react-icons/si";
import { TbBrain, TbChartHistogram, TbChartPie3, TbChartInfographic, TbBuildingSkyscraper, TbChartBar, TbChartDots, TbDatabase } from "react-icons/tb";
import type { IconType } from "react-icons";

export interface Category {
  name: string;
  icon: IconType;
  gradient: string; // tailwind gradient classes
  count?: number;
}

export const categories: Category[] = [
  { name: "Power BI", icon: TbChartBar, gradient: "from-yellow-400 to-orange-500" },
  { name: "Tableau", icon: TbChartDots, gradient: "from-sky-400 to-blue-600" },
  { name: "SQL", icon: TbDatabase, gradient: "from-indigo-400 to-purple-600" },
  { name: "Python", icon: SiPython, gradient: "from-cyan-400 to-blue-500" },
  { name: "Machine Learning", icon: TbBrain, gradient: "from-fuchsia-400 to-purple-600" },
  { name: "EDA", icon: TbChartHistogram, gradient: "from-emerald-400 to-teal-600" },
  { name: "Excel Analytics", icon: TbChartPie3, gradient: "from-green-400 to-emerald-600" },
  { name: "Data Visualization", icon: TbChartInfographic, gradient: "from-pink-400 to-rose-600" },
  { name: "Business Intelligence", icon: TbBuildingSkyscraper, gradient: "from-violet-400 to-indigo-600" },
];
