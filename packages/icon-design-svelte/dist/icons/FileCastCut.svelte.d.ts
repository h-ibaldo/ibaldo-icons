import { SvelteComponent } from 'svelte';

export interface FileCastCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCastCut extends SvelteComponent<FileCastCutProps> {}
