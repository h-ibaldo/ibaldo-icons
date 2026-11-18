import { SvelteComponent } from 'svelte';

export interface PaperclipCircleShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleShort extends SvelteComponent<PaperclipCircleShortProps> {}
