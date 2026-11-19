import { SvelteComponent } from 'svelte';

export interface FileCastCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCastCornerCut extends SvelteComponent<FileCastCornerCutProps> {}
