import { SvelteComponent } from 'svelte';

export interface FileSyncCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSyncCut extends SvelteComponent<FileSyncCutProps> {}
