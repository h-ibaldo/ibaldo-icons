import { SvelteComponent } from 'svelte';

export interface FilePaperclipHorizontalCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePaperclipHorizontalCut extends SvelteComponent<FilePaperclipHorizontalCutProps> {}
