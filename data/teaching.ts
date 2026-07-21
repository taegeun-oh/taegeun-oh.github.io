export type TeachingArea = {
  number: string;
  title: string;
  summary: string;
  courses: readonly string[];
};

export const teachingAreas: readonly TeachingArea[] = [
  {
    number: "01",
    title: "Programming & Computing Foundations",
    summary:
      "Core computational thinking, from programming and computer architecture to algorithms and dependable software development.",
    courses: [
      "C Programming",
      "Computer Structure",
      "Introduction to Algorithm",
      "Software Engineering",
    ],
  },
  {
    number: "02",
    title: "AI, Vision & Robotics",
    summary:
      "Methods for intelligent systems that perceive their environment, reason about it, and plan safe motion.",
    courses: [
      "Introduction to Artificial Intelligence",
      "Introduction to Image Processing",
      "Robot Path Planning",
    ],
  },
  {
    number: "03",
    title: "Design & Research Practice",
    summary:
      "Project-based courses that turn engineering fundamentals into implemented, tested, and communicated systems.",
    courses: ["Capstone Design", "Undergraduate Research Project"],
  },
];
