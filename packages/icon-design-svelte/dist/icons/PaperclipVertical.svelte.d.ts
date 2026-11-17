import { SvelteComponent } from 'svelte';

export interface PaperclipVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipVertical extends SvelteComponent<PaperclipVerticalProps> {}
