import { SvelteComponent } from 'svelte';

export interface CursorRippleDoubleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorRippleDoubleSharp extends SvelteComponent<CursorRippleDoubleSharpProps> {}
