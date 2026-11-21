import { SvelteComponent } from 'svelte';

export interface PowerCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PowerCircle extends SvelteComponent<PowerCircleProps> {}
