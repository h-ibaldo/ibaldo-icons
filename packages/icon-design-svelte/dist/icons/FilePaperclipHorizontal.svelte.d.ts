import { SvelteComponent } from 'svelte';

export interface FilePaperclipHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePaperclipHorizontal extends SvelteComponent<FilePaperclipHorizontalProps> {}
