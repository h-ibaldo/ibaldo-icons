import { SvelteComponent } from 'svelte';

export interface FileLinesSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesSearch extends SvelteComponent<FileLinesSearchProps> {}
