import { SvelteComponent } from 'svelte';

export interface FileZipCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileZipCut extends SvelteComponent<FileZipCutProps> {}
