import { SvelteComponent } from 'svelte';

export interface FileLinesLeftCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesLeftCut extends SvelteComponent<FileLinesLeftCutProps> {}
