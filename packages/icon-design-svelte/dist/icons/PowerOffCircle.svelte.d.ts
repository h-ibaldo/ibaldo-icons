import { SvelteComponent } from 'svelte';

export interface PowerOffCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PowerOffCircle extends SvelteComponent<PowerOffCircleProps> {}
