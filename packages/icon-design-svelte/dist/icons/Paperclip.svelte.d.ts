import { SvelteComponent } from 'svelte';

export interface PaperclipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Paperclip extends SvelteComponent<PaperclipProps> {}
