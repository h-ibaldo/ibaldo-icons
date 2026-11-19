import { SvelteComponent } from 'svelte';

export interface FileMailPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMailPlain extends SvelteComponent<FileMailPlainProps> {}
