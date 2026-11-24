import { SvelteComponent } from 'svelte';

export interface FileCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCode extends SvelteComponent<FileCodeProps> {}
