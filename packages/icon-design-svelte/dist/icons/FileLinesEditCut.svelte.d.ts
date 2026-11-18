import { SvelteComponent } from 'svelte';

export interface FileLinesEditCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesEditCut extends SvelteComponent<FileLinesEditCutProps> {}
