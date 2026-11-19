import { SvelteComponent } from 'svelte';

export interface FileArrowOutCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowOutCut extends SvelteComponent<FileArrowOutCutProps> {}
