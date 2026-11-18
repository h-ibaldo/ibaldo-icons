import { SvelteComponent } from 'svelte';

export interface FileMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinus extends SvelteComponent<FileMinusProps> {}
