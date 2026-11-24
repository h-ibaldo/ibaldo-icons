import { SvelteComponent } from 'svelte';

export interface FileArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowOut extends SvelteComponent<FileArrowOutProps> {}
