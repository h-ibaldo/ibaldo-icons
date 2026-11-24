import { SvelteComponent } from 'svelte';

export interface FileGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileGrid extends SvelteComponent<FileGridProps> {}
