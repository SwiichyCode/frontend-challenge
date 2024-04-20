type CreateChallengeType = {
  name: string;
  description: string;
  language: "HTML_CSS" | "JS" | "API";
  difficulty: "NEWBIE" | "JUNIOR" | "INTERMEDIATE" | "ADVANCED" | "GURU";
  brief: string;
  tips: string;
  assets_presentation: string[];
  premium: boolean;
  starter_code_url: string;
  starter_figma_url: string;
  createdById: string;
};

export type { CreateChallengeType };
