export type ResearchArea = {
  id: string;
  number: string;
  kicker: string;
  title: string;
  cardSummary: string;
  summary: string;
  topics: string[];
  image: string;
  alt: string;
};

export const researchAreas: ResearchArea[] = [
  {
    id: "autonomous-systems",
    number: "01",
    kicker: "Autonomous systems",
    title: "Autonomous systems & mission intelligence",
    cardSummary: "Reliable mission software and onboard intelligence for unmanned aircraft.",
    summary:
      "Reliable autonomy for unmanned aircraft, from mission management and situational awareness to fault-tolerant flight-control software.",
    topics: [
      "UAV mission management",
      "Distributed task re-allocation",
      "Flight-control computers",
      "Situational awareness",
    ],
    image: "/research-autonomy.webp",
    alt: "Autonomous aircraft connecting terrain sensing, onboard computing, and mission intelligence",
  },
  {
    id: "path-planning",
    number: "02",
    kicker: "Intelligent planning",
    title: "Intelligent path planning",
    cardSummary: "Adaptive routes that account for terrain, time, and operational constraints.",
    summary:
      "Sampling-based and learning-assisted planners that respond to terrain, time windows, fleet constraints, and real operating conditions.",
    topics: [
      "TA-RRT*",
      "Time-window-aware planning",
      "Demand-responsive transit",
      "Outdoor delivery robots",
    ],
    image: "/research-path-planning.webp",
    alt: "Topographic planning map with obstacles, sampled alternatives, and an optimized route",
  },
  {
    id: "computer-vision",
    number: "03",
    kicker: "Computer vision",
    title: "Computer vision & multi-task perception",
    cardSummary: "Shared visual representations for complex autonomous-driving and UAV scenes.",
    summary:
      "Visual systems that share information across tasks to interpret autonomous-driving scenes and UAV imagery efficiently and consistently.",
    topics: [
      "Multi-task learning",
      "Autonomous-driving perception",
      "UAV imagery",
      "Detection, depth & segmentation",
    ],
    image: "/research-perception.webp",
    alt: "Multi-task perception pipeline connecting aerial imagery to detection, depth, and segmentation outputs",
  },
  {
    id: "medical-imaging",
    number: "04",
    kicker: "Medical image AI",
    title: "Medical image intelligence",
    cardSummary: "Deep learning for histopathology classification and tissue-level analysis.",
    summary:
      "Deep learning methods for disease classification and tissue-level analysis in histopathological and other biomedical images, with an emphasis on robust comparison and clinically meaningful evaluation.",
    topics: [
      "Histopathology classification",
      "Multi-organ disease analysis",
      "Brain lesion assessment",
      "Biomedical model evaluation",
    ],
    image: "/research-medical-imaging.png",
    alt: "Histopathology analysis workflow from a whole-slide tissue image through cellular features to classification outputs",
  },
];
