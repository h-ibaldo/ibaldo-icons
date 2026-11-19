import { SvelteComponent } from 'svelte';

export interface FileXCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCornerPlain extends SvelteComponent<FileXCornerPlainProps> {}
