import { SvelteComponent } from 'svelte';

export interface VideoReelsLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoReelsLarge extends SvelteComponent<VideoReelsLargeProps> {}
