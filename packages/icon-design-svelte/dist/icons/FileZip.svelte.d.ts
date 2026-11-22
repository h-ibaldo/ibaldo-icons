import { SvelteComponent } from 'svelte';

export interface FileZipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileZip extends SvelteComponent<FileZipProps> {}
