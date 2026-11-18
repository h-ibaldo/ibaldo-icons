import { SvelteComponent } from 'svelte';

export interface FileXCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCornerCut extends SvelteComponent<FileXCornerCutProps> {}
