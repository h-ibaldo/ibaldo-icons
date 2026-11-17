import { SvelteComponent } from 'svelte';

export interface PaperclipCircleCheckShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleCheckShort extends SvelteComponent<PaperclipCircleCheckShortProps> {}
