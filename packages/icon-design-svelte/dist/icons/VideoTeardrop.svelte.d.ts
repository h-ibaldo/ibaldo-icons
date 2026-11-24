import { SvelteComponent } from 'svelte';

export interface VideoTeardropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoTeardrop extends SvelteComponent<VideoTeardropProps> {}
