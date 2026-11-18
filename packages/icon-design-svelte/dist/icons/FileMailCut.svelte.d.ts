import { SvelteComponent } from 'svelte';

export interface FileMailCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMailCut extends SvelteComponent<FileMailCutProps> {}
