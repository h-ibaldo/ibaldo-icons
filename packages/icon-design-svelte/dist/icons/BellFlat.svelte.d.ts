import { SvelteComponent } from 'svelte';

export interface BellFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellFlat extends SvelteComponent<BellFlatProps> {}
