import { SvelteComponent } from 'svelte';

export interface FileStackOverlapCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackOverlapCut extends SvelteComponent<FileStackOverlapCutProps> {}
