import { SvelteComponent } from 'svelte';

export interface BellDotDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDotDash extends SvelteComponent<BellDotDashProps> {}
