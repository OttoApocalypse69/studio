export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  images?: string[];
  projectUrl?: string;
  tags: string[];
  client?: string;
  date?: string;
  technologies?: string[];
}

export interface Software {
  id: string;
  name: string;
  description: string;
  downloadUrl: string;
  iconUrl?: string; // URL to an icon image
  platform: string; // e.g., "Windows", "macOS", "Cross-platform"
  version?: string;
  releaseDate?: string;
}

export interface YouTubeVideo {
  id: string; // YouTube video ID
  title: string;
  description?: string;
  thumbnailUrl?: string; // Auto-fetched or manually set
}
