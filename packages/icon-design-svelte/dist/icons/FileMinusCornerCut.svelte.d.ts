import { SvelteComponent } from 'svelte';

export interface FileMinusCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCornerCut extends SvelteComponent<FileMinusCornerCutProps> {}
