import { SvelteComponent } from 'svelte';

export interface HandFistCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandFistCircle extends SvelteComponent<HandFistCircleProps> {}
