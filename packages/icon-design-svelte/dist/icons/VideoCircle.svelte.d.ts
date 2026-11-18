import { SvelteComponent } from 'svelte';

export interface VideoCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoCircle extends SvelteComponent<VideoCircleProps> {}
