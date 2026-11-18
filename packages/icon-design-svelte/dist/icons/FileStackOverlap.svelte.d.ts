import { SvelteComponent } from 'svelte';

export interface FileStackOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackOverlap extends SvelteComponent<FileStackOverlapProps> {}
