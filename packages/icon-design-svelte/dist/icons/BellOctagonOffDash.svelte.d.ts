import { SvelteComponent } from 'svelte';

export interface BellOctagonOffDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOctagonOffDash extends SvelteComponent<BellOctagonOffDashProps> {}
