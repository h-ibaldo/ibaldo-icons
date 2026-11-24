import { SvelteComponent } from 'svelte';

export interface VideoLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoLarge extends SvelteComponent<VideoLargeProps> {}
