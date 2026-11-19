import { SvelteComponent } from 'svelte';

export interface FileWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileWarning extends SvelteComponent<FileWarningProps> {}
