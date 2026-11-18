import { SvelteComponent } from 'svelte';

export interface FileStampCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStampCut extends SvelteComponent<FileStampCutProps> {}
