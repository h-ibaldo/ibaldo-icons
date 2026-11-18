import { SvelteComponent } from 'svelte';

export interface VideoSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoSquareDot extends SvelteComponent<VideoSquareDotProps> {}
