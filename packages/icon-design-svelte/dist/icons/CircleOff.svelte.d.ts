import { SvelteComponent } from 'svelte';

export interface CircleOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleOff extends SvelteComponent<CircleOffProps> {}
