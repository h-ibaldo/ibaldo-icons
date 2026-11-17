import { SvelteComponent } from 'svelte';

export interface BellDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDash extends SvelteComponent<BellDashProps> {}
