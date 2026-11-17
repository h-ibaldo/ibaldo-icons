import { SvelteComponent } from 'svelte';

export interface FileBracketsRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBracketsRight extends SvelteComponent<FileBracketsRightProps> {}
