import { SvelteComponent } from 'svelte';

export interface PaperclipCircleXShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleXShort extends SvelteComponent<PaperclipCircleXShortProps> {}
