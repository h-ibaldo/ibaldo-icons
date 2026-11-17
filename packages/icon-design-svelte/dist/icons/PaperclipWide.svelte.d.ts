import { SvelteComponent } from 'svelte';

export interface PaperclipWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipWide extends SvelteComponent<PaperclipWideProps> {}
