import { SvelteComponent } from 'svelte';

export interface FileMinusCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCut extends SvelteComponent<FileMinusCutProps> {}
