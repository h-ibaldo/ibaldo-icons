import { SvelteComponent } from 'svelte';

export interface FileArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUp extends SvelteComponent<FileArrowUpProps> {}
