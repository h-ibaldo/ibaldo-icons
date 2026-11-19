import { SvelteComponent } from 'svelte';

export interface FileTriangleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTriangleCut extends SvelteComponent<FileTriangleCutProps> {}
