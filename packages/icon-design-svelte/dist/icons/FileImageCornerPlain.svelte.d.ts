import { SvelteComponent } from 'svelte';

export interface FileImageCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImageCornerPlain extends SvelteComponent<FileImageCornerPlainProps> {}
