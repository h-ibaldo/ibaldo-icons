import { SvelteComponent } from 'svelte';

export interface PaperclipXVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXVertical extends SvelteComponent<PaperclipXVerticalProps> {}
