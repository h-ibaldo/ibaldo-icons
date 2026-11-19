import { SvelteComponent } from 'svelte';

export interface FilePlusCornerCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCornerCut extends SvelteComponent<FilePlusCornerCutProps> {}
