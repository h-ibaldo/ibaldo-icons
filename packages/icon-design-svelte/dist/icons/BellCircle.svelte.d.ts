import { SvelteComponent } from 'svelte';

export interface BellCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCircle extends SvelteComponent<BellCircleProps> {}
