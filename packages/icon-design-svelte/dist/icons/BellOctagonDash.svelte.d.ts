import { SvelteComponent } from 'svelte';

export interface BellOctagonDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOctagonDash extends SvelteComponent<BellOctagonDashProps> {}
