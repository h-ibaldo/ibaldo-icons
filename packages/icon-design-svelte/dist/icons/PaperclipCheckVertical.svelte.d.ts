import { SvelteComponent } from 'svelte';

export interface PaperclipCheckVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckVertical extends SvelteComponent<PaperclipCheckVerticalProps> {}
