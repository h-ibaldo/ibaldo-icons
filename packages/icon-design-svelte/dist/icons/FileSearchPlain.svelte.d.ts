import { SvelteComponent } from 'svelte';

export interface FileSearchPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSearchPlain extends SvelteComponent<FileSearchPlainProps> {}
