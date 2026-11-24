import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpShort extends SvelteComponent<PaperclipArrowUpShortProps> {}
