import { SvelteComponent } from 'svelte';

export interface FileCheckCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckCut extends SvelteComponent<FileCheckCutProps> {}
