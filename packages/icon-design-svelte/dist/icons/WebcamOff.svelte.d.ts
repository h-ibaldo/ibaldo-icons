import { SvelteComponent } from 'svelte';

export interface WebcamOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebcamOff extends SvelteComponent<WebcamOffProps> {}
