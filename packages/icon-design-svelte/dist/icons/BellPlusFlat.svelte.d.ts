import { SvelteComponent } from 'svelte';

export interface BellPlusFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellPlusFlat extends SvelteComponent<BellPlusFlatProps> {}
