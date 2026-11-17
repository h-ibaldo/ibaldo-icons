import { SvelteComponent } from 'svelte';

export interface BellRingLinesDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRingLinesDash extends SvelteComponent<BellRingLinesDashProps> {}
