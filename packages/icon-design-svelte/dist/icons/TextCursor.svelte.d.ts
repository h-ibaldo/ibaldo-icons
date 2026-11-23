import { SvelteComponent } from 'svelte';

export interface TextCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextCursor extends SvelteComponent<TextCursorProps> {}
