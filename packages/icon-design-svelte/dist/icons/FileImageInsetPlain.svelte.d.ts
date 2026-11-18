import { SvelteComponent } from 'svelte';

export interface FileImageInsetPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImageInsetPlain extends SvelteComponent<FileImageInsetPlainProps> {}
