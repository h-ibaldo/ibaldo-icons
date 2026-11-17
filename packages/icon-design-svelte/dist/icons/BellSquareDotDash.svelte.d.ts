import { SvelteComponent } from 'svelte';

export interface BellSquareDotDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSquareDotDash extends SvelteComponent<BellSquareDotDashProps> {}
