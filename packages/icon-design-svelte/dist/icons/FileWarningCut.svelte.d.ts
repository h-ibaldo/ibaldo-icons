import { SvelteComponent } from 'svelte';

export interface FileWarningCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileWarningCut extends SvelteComponent<FileWarningCutProps> {}
