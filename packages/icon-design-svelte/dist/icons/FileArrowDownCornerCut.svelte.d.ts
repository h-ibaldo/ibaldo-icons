import { SvelteComponent } from 'svelte';

export interface FileArrowDownCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDownCornerCut extends SvelteComponent<FileArrowDownCornerCutProps> {}
