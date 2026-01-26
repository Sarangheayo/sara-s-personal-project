export interface Skill {
  name: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "PHP" },
      { name: "Java" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React" },
      { name: "Vue.js" },
      { name: "Angular" },
      { name: "Express.js" },
      { name: "Django/Flask" },
      { name: "Node.js" },
    ],
  },
  {
    category: "Database",
    skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "HeidiSQL" },
    ]
  },
  {
      category: "Tools & Environment",
      skills: [
        { name: "VS Code" },
        { name: "Git/GitHub" },
        { name: "Linux/Mac Setting" },
      ]
  }
];
