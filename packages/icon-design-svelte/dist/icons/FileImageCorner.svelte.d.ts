import { SvelteComponent } from 'svelte';

export interface FileImageCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImageCorner extends SvelteComponent<FileImageCornerProps> {}
