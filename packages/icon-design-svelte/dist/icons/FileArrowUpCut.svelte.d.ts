import { SvelteComponent } from 'svelte';

export interface FileArrowUpCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpCut extends SvelteComponent<FileArrowUpCutProps> {}
