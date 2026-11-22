import { SvelteComponent } from 'svelte';

export interface FileVideoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileVideo extends SvelteComponent<FileVideoProps> {}
