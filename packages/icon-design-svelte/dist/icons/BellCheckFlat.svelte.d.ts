import { SvelteComponent } from 'svelte';

export interface BellCheckFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckFlat extends SvelteComponent<BellCheckFlatProps> {}
