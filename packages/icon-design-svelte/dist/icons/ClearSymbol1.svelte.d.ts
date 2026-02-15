import { SvelteComponent } from 'svelte';

export interface ClearSymbol1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClearSymbol1 extends SvelteComponent<ClearSymbol1Props> {}
