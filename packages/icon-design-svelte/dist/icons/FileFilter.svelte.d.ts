import { SvelteComponent } from 'svelte';

export interface FileFilterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileFilter extends SvelteComponent<FileFilterProps> {}
