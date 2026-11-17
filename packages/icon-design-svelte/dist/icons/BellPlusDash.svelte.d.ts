import { SvelteComponent } from 'svelte';

export interface BellPlusDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellPlusDash extends SvelteComponent<BellPlusDashProps> {}
