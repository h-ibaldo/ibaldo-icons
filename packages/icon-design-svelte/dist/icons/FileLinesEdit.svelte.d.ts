import { SvelteComponent } from 'svelte';

export interface FileLinesEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesEdit extends SvelteComponent<FileLinesEditProps> {}
