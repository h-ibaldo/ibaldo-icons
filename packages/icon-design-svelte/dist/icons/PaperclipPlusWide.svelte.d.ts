import { SvelteComponent } from 'svelte';

export interface PaperclipPlusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusWide extends SvelteComponent<PaperclipPlusWideProps> {}
