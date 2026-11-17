import { SvelteComponent } from 'svelte';

export interface CursorShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorShine extends SvelteComponent<CursorShineProps> {}
