import { SvelteComponent } from 'svelte';

export interface FileStarCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStarCut extends SvelteComponent<FileStarCutProps> {}
