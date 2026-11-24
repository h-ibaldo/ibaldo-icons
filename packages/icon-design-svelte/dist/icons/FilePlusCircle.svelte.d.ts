import { SvelteComponent } from 'svelte';

export interface FilePlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCircle extends SvelteComponent<FilePlusCircleProps> {}
