import { SvelteComponent } from 'svelte';

export interface FileSearchCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSearchCut extends SvelteComponent<FileSearchCutProps> {}
