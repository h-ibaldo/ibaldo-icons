import { SvelteComponent } from 'svelte';

export interface SquareStackPaperclipCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPaperclipCurl extends SvelteComponent<SquareStackPaperclipCurlProps> {}
