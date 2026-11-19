import { SvelteComponent } from 'svelte';

export interface FileArrowDownCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDownCorner extends SvelteComponent<FileArrowDownCornerProps> {}
