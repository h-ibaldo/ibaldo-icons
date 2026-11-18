import { SvelteComponent } from 'svelte';

export interface FileXCircleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCircleCut extends SvelteComponent<FileXCircleCutProps> {}
