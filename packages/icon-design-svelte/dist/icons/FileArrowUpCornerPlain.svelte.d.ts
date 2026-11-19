import { SvelteComponent } from 'svelte';

export interface FileArrowUpCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpCornerPlain extends SvelteComponent<FileArrowUpCornerPlainProps> {}
