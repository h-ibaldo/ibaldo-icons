import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpSlim extends SvelteComponent<PaperclipArrowUpSlimProps> {}
