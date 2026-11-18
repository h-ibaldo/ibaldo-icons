import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpVertical extends SvelteComponent<PaperclipArrowUpVerticalProps> {}
