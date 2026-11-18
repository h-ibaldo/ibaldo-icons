import { SvelteComponent } from 'svelte';

export interface FileArrowDownCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDownCut extends SvelteComponent<FileArrowDownCutProps> {}
