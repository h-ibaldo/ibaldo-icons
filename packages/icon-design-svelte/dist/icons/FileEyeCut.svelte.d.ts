import { SvelteComponent } from 'svelte';

export interface FileEyeCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEyeCut extends SvelteComponent<FileEyeCutProps> {}
