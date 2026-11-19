import { SvelteComponent } from 'svelte';

export interface FileLinesEditCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesEditCorner extends SvelteComponent<FileLinesEditCornerProps> {}
