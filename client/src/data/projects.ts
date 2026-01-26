export interface Project {
  title: string;
  description: string;
  details: string[];
  sourceFile?: string;
}

export const projectsData: Project[] = [
  {
    title: "[Seoulway]",
    description: "A project related to Seoul subway information.",
    details: [
      "Implemented a feature to remove duplicate rows from a timetable.",
      "The logic is implemented in TypeScript for type safety.",
    ],
    sourceFile: "utils/seoulway.ts"
  },
  {
    title: "[RC_rainbow cake]",
    description: "A project with a colorful theme.",
    details: [
        "Details about this project will be filled in later."
    ],
  },
  {
    title: "[Saragram]",
    description: "A social media application clone.",
    details: [
      "Implemented JWT-based authentication flow.",
      "Handled file uploads with Multer, including extension filtering.",
      "Service layer logic is separated for maintainability.",
    ],
    sourceFile: "services/saragram.ts"
  },
  {
    title: "[Omok Game]",
    description: "A classic Gomoku game implementation.",
    details: [
      "Developed the win condition algorithm in pure JavaScript.",
      "The logic is contained in a standalone module.",
    ],
    sourceFile: "utils/omok.js"
  },
];

export const troubleshootingData = [
    {
        title: "GitHub Merge Conflict Resolution",
        description: "Encountered and resolved a complex merge conflict involving multiple feature branches. The resolution involved careful use of `git rebase` and manual conflict fixing to preserve the commit history."
    },
    {
        title: "Environment Variable Mismatch",
        description: "A production bug was traced back to a missing environment variable in the deployment server. This led to the implementation of a startup script that validates the presence of all required environment variables, preventing similar issues in the future."
    }
]
