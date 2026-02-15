import { SvelteComponent } from 'svelte';

export interface ClearSymbol2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClearSymbol2 extends SvelteComponent<ClearSymbol2Props> {}
