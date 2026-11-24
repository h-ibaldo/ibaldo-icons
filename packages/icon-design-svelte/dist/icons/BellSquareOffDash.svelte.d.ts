import { SvelteComponent } from 'svelte';

export interface BellSquareOffDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSquareOffDash extends SvelteComponent<BellSquareOffDashProps> {}
