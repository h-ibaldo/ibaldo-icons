import { SvelteComponent } from 'svelte';

export interface BellXFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellXFlat extends SvelteComponent<BellXFlatProps> {}
