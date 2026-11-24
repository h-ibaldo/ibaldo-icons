import { SvelteComponent } from 'svelte';

export interface FileArrowBendCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowBendCut extends SvelteComponent<FileArrowBendCutProps> {}
