import { SvelteComponent } from 'svelte';

export interface FileLinesEditCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesEditCornerPlain extends SvelteComponent<FileLinesEditCornerPlainProps> {}
