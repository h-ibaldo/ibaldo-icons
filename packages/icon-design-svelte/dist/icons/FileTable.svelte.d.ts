import { SvelteComponent } from 'svelte';

export interface FileTableProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTable extends SvelteComponent<FileTableProps> {}
