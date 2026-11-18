import { SvelteComponent } from 'svelte';

export interface FileLinesLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesLeft extends SvelteComponent<FileLinesLeftProps> {}
