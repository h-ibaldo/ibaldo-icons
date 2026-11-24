import { SvelteComponent } from 'svelte';

export interface FileStackCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackCut extends SvelteComponent<FileStackCutProps> {}
