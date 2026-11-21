import { SvelteComponent } from 'svelte';

export interface WebcamProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Webcam extends SvelteComponent<WebcamProps> {}
