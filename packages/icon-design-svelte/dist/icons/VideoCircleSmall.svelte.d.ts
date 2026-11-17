import { SvelteComponent } from 'svelte';

export interface VideoCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoCircleSmall extends SvelteComponent<VideoCircleSmallProps> {}
