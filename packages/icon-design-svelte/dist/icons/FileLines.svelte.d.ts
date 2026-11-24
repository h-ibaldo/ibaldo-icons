import { SvelteComponent } from 'svelte';

export interface FileLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLines extends SvelteComponent<FileLinesProps> {}
