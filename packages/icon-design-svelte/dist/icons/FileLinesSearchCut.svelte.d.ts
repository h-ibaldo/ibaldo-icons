import { SvelteComponent } from 'svelte';

export interface FileLinesSearchCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesSearchCut extends SvelteComponent<FileLinesSearchCutProps> {}
