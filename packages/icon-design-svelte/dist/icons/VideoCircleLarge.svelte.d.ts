import { SvelteComponent } from 'svelte';

export interface VideoCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoCircleLarge extends SvelteComponent<VideoCircleLargeProps> {}
