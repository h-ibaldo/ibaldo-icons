import { SvelteComponent } from 'svelte';

export interface FileRefreshCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileRefreshCut extends SvelteComponent<FileRefreshCutProps> {}
