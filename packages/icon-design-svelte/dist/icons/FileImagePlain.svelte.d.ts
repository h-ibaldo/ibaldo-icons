import { SvelteComponent } from 'svelte';

export interface FileImagePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImagePlain extends SvelteComponent<FileImagePlainProps> {}
