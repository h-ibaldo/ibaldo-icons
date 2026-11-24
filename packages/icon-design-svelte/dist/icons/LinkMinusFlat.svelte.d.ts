import { SvelteComponent } from 'svelte';

export interface LinkMinusFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusFlat extends SvelteComponent<LinkMinusFlatProps> {}
