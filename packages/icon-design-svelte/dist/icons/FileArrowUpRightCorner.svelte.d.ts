import { SvelteComponent } from 'svelte';

export interface FileArrowUpRightCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpRightCorner extends SvelteComponent<FileArrowUpRightCornerProps> {}
