import { SvelteComponent } from 'svelte';

export interface BellCircleOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCircleOff extends SvelteComponent<BellCircleOffProps> {}
