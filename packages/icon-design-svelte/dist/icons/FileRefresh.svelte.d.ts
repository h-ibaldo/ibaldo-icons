import { SvelteComponent } from 'svelte';

export interface FileRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileRefresh extends SvelteComponent<FileRefreshProps> {}
