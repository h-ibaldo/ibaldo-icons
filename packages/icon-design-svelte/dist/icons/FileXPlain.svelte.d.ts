import { SvelteComponent } from 'svelte';

export interface FileXPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXPlain extends SvelteComponent<FileXPlainProps> {}
