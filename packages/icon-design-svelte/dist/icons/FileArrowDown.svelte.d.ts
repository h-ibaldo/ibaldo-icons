import { SvelteComponent } from 'svelte';

export interface FileArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDown extends SvelteComponent<FileArrowDownProps> {}
