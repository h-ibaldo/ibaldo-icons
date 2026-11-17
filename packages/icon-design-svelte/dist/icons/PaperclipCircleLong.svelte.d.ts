import { SvelteComponent } from 'svelte';

export interface PaperclipCircleLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleLong extends SvelteComponent<PaperclipCircleLongProps> {}
