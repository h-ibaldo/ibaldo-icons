import { SvelteComponent } from 'svelte';

export interface VideoOffLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoOffLarge extends SvelteComponent<VideoOffLargeProps> {}
