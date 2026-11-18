import { SvelteComponent } from 'svelte';

export interface CursorRippleDoubleStemProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorRippleDoubleStem extends SvelteComponent<CursorRippleDoubleStemProps> {}
