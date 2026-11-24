import { SvelteComponent } from 'svelte';

export interface FileArrowUpCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpCorner extends SvelteComponent<FileArrowUpCornerProps> {}
