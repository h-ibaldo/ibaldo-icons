import { SvelteComponent } from 'svelte';

export interface CursorUpSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorUpSharp extends SvelteComponent<CursorUpSharpProps> {}
