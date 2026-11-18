import { SvelteComponent } from 'svelte';

export interface FileCheckCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckCornerCut extends SvelteComponent<FileCheckCornerCutProps> {}
