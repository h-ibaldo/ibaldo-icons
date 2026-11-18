import { SvelteComponent } from 'svelte';

export interface VideoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Video extends SvelteComponent<VideoProps> {}
