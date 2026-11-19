import { SvelteComponent } from 'svelte';

export interface FileArrowUpPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpPlain extends SvelteComponent<FileArrowUpPlainProps> {}
