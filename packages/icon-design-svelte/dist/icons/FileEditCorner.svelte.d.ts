import { SvelteComponent } from 'svelte';

export interface FileEditCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditCorner extends SvelteComponent<FileEditCornerProps> {}
