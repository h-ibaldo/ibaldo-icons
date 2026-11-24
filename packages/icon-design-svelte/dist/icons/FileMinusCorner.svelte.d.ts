import { SvelteComponent } from 'svelte';

export interface FileMinusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCorner extends SvelteComponent<FileMinusCornerProps> {}
