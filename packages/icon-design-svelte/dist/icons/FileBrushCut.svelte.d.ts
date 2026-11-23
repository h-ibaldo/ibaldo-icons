import { SvelteComponent } from 'svelte';

export interface FileBrushCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBrushCut extends SvelteComponent<FileBrushCutProps> {}
