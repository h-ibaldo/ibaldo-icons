import { SvelteComponent } from 'svelte';

export interface FileImageInsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImageInset extends SvelteComponent<FileImageInsetProps> {}
