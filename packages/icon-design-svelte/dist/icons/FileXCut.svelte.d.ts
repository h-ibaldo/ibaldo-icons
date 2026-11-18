import { SvelteComponent } from 'svelte';

export interface FileXCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCut extends SvelteComponent<FileXCutProps> {}
