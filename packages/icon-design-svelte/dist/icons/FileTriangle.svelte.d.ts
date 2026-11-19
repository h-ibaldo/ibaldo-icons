import { SvelteComponent } from 'svelte';

export interface FileTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTriangle extends SvelteComponent<FileTriangleProps> {}
