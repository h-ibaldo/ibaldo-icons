import { SvelteComponent } from 'svelte';

export interface OptionsCheckCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckCursor extends SvelteComponent<OptionsCheckCursorProps> {}
