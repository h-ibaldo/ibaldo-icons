import { SvelteComponent } from 'svelte';

export interface CursorRippleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorRippleSmall extends SvelteComponent<CursorRippleSmallProps> {}
