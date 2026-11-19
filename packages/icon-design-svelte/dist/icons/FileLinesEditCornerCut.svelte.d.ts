import { SvelteComponent } from 'svelte';

export interface FileLinesEditCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesEditCornerCut extends SvelteComponent<FileLinesEditCornerCutProps> {}
