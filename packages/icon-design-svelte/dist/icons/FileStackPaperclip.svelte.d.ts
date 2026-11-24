import { SvelteComponent } from 'svelte';

export interface FileStackPaperclipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackPaperclip extends SvelteComponent<FileStackPaperclipProps> {}
