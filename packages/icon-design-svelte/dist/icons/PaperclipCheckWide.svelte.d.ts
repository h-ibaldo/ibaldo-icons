import { SvelteComponent } from 'svelte';

export interface PaperclipCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckWide extends SvelteComponent<PaperclipCheckWideProps> {}
