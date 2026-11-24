import { SvelteComponent } from 'svelte';

export interface BellXDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXDash extends SvelteComponent<BellXDashProps> {}
