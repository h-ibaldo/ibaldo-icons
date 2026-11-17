import { SvelteComponent } from 'svelte';

export interface CursorUp2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorUp2 extends SvelteComponent<CursorUp2Props> {}
