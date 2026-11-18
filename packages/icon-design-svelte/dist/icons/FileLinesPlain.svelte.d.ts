import { SvelteComponent } from 'svelte';

export interface FileLinesPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesPlain extends SvelteComponent<FileLinesPlainProps> {}
