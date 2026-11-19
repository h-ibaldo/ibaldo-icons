import { SvelteComponent } from 'svelte';

export interface FileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class File extends SvelteComponent<FileProps> {}
