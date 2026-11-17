import { SvelteComponent } from 'svelte';

export interface BellRingDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingDash extends SvelteComponent<BellRingDashProps> {}
