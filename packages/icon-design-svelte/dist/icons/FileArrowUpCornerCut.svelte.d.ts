import { SvelteComponent } from 'svelte';

export interface FileArrowUpCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpCornerCut extends SvelteComponent<FileArrowUpCornerCutProps> {}
