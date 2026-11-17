import { SvelteComponent } from 'svelte';

export interface HandStopCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandStopCircle extends SvelteComponent<HandStopCircleProps> {}
