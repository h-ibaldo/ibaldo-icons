import { SvelteComponent } from 'svelte';

export interface HandSpreadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSpread extends SvelteComponent<HandSpreadProps> {}
