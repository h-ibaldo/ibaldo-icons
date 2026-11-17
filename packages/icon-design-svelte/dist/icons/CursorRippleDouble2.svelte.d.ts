import { SvelteComponent } from 'svelte';

export interface CursorRippleDouble2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorRippleDouble2 extends SvelteComponent<CursorRippleDouble2Props> {}
