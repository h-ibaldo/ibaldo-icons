import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUp extends SvelteComponent<PaperclipArrowUpProps> {}
