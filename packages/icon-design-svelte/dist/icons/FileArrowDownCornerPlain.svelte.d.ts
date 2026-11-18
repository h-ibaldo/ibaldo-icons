import { SvelteComponent } from 'svelte';

export interface FileArrowDownCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDownCornerPlain extends SvelteComponent<FileArrowDownCornerPlainProps> {}
