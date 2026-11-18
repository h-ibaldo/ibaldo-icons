import { SvelteComponent } from 'svelte';

export interface FilePaperclipHorizontalPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePaperclipHorizontalPlain extends SvelteComponent<FilePaperclipHorizontalPlainProps> {}
