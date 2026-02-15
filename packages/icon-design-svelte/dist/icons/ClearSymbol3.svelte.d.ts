import { SvelteComponent } from 'svelte';

export interface ClearSymbol3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClearSymbol3 extends SvelteComponent<ClearSymbol3Props> {}
