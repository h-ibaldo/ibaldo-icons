import { SvelteComponent } from 'svelte';

export interface FileMinusCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCornerPlain extends SvelteComponent<FileMinusCornerPlainProps> {}
