import { SvelteComponent } from 'svelte';

export interface FileLinesLeftPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesLeftPlain extends SvelteComponent<FileLinesLeftPlainProps> {}
