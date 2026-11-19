import { SvelteComponent } from 'svelte';

export interface FileXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileX extends SvelteComponent<FileXProps> {}
