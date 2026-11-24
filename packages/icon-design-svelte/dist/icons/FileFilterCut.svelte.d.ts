import { SvelteComponent } from 'svelte';

export interface FileFilterCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileFilterCut extends SvelteComponent<FileFilterCutProps> {}
