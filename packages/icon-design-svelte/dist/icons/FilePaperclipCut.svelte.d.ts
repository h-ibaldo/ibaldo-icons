import { SvelteComponent } from 'svelte';

export interface FilePaperclipCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePaperclipCut extends SvelteComponent<FilePaperclipCutProps> {}
