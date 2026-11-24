import { SvelteComponent } from 'svelte';

export interface FileSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSearch extends SvelteComponent<FileSearchProps> {}
