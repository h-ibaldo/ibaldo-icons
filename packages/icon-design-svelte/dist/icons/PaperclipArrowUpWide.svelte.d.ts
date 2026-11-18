import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpWide extends SvelteComponent<PaperclipArrowUpWideProps> {}
