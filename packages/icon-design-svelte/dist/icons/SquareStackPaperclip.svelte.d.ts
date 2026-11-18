import { SvelteComponent } from 'svelte';

export interface SquareStackPaperclipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPaperclip extends SvelteComponent<SquareStackPaperclipProps> {}
