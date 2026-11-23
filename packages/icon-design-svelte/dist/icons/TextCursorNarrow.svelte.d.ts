import { SvelteComponent } from 'svelte';

export interface TextCursorNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextCursorNarrow extends SvelteComponent<TextCursorNarrowProps> {}
