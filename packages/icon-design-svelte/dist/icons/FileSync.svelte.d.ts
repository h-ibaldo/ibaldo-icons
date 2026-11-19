import { SvelteComponent } from 'svelte';

export interface FileSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSync extends SvelteComponent<FileSyncProps> {}
