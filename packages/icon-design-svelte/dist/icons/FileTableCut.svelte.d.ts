import { SvelteComponent } from 'svelte';

export interface FileTableCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTableCut extends SvelteComponent<FileTableCutProps> {}
