import { SvelteComponent } from 'svelte';

export interface VideoSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoSquare extends SvelteComponent<VideoSquareProps> {}
