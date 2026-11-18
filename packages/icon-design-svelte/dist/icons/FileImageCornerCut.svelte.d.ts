import { SvelteComponent } from 'svelte';

export interface FileImageCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileImageCornerCut extends SvelteComponent<FileImageCornerCutProps> {}
