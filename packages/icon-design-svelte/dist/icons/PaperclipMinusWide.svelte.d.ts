import { SvelteComponent } from 'svelte';

export interface PaperclipMinusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusWide extends SvelteComponent<PaperclipMinusWideProps> {}
