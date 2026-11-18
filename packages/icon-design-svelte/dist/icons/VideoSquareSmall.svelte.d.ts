import { SvelteComponent } from 'svelte';

export interface VideoSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoSquareSmall extends SvelteComponent<VideoSquareSmallProps> {}
