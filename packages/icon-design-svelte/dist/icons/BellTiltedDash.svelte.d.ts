import { SvelteComponent } from 'svelte';

export interface BellTiltedDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellTiltedDash extends SvelteComponent<BellTiltedDashProps> {}
