import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string; // URL or Lucide component name logic
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp?: Date;
  isTyping?: boolean;
}
