import { SvelteComponent } from 'svelte';

export interface SquareStackPaperclipTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPaperclipTilted extends SvelteComponent<SquareStackPaperclipTiltedProps> {}
