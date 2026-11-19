import { SvelteComponent } from 'svelte';

export interface FileImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImage extends SvelteComponent<FileImageProps> {}
