import { SvelteComponent } from 'svelte';

export interface BellClockDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellClockDash extends SvelteComponent<BellClockDashProps> {}
