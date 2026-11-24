import { SvelteComponent } from 'svelte';

export interface FileSyncPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSyncPlain extends SvelteComponent<FileSyncPlainProps> {}
