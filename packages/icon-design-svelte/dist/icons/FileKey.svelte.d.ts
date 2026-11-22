import { SvelteComponent } from 'svelte';

export interface FileKeyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileKey extends SvelteComponent<FileKeyProps> {}
