import { SvelteComponent } from 'svelte';

export interface FileCheckCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckCornerPlain extends SvelteComponent<FileCheckCornerPlainProps> {}
