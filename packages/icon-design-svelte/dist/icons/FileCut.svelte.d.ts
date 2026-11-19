import { SvelteComponent } from 'svelte';

export interface FileCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCut extends SvelteComponent<FileCutProps> {}
