import { SvelteComponent } from 'svelte';

export interface FileStackCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackCode extends SvelteComponent<FileStackCodeProps> {}
