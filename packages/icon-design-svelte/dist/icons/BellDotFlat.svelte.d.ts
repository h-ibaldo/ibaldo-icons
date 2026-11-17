import { SvelteComponent } from 'svelte';

export interface BellDotFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDotFlat extends SvelteComponent<BellDotFlatProps> {}
