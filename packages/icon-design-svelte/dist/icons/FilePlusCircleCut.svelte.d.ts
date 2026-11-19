import { SvelteComponent } from 'svelte';

export interface FilePlusCircleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCircleCut extends SvelteComponent<FilePlusCircleCutProps> {}
