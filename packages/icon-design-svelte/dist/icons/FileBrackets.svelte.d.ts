import { SvelteComponent } from 'svelte';

export interface FileBracketsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBrackets extends SvelteComponent<FileBracketsProps> {}
