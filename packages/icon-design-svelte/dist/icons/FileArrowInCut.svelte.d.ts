import { SvelteComponent } from 'svelte';

export interface FileArrowInCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowInCut extends SvelteComponent<FileArrowInCutProps> {}
