import { SvelteComponent } from 'svelte';

export interface BellOffDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOffDash extends SvelteComponent<BellOffDashProps> {}
