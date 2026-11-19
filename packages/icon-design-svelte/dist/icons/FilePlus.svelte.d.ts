import { SvelteComponent } from 'svelte';

export interface FilePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlus extends SvelteComponent<FilePlusProps> {}
