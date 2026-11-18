import { SvelteComponent } from 'svelte';

export interface FileStackBracketsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackBrackets extends SvelteComponent<FileStackBracketsProps> {}
