import { SvelteComponent } from 'svelte';

export interface PaperclipCircleCheckLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleCheckLong extends SvelteComponent<PaperclipCircleCheckLongProps> {}
