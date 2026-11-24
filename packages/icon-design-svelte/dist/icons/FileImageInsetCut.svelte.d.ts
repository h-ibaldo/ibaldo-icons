import { SvelteComponent } from 'svelte';

export interface FileImageInsetCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImageInsetCut extends SvelteComponent<FileImageInsetCutProps> {}
