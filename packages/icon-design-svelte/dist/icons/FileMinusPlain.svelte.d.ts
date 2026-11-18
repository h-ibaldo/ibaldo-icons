import { SvelteComponent } from 'svelte';

export interface FileMinusPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusPlain extends SvelteComponent<FileMinusPlainProps> {}
