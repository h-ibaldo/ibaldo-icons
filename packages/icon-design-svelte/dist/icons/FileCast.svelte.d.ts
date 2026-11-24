import { SvelteComponent } from 'svelte';

export interface FileCastProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCast extends SvelteComponent<FileCastProps> {}
