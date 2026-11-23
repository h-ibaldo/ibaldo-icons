import { SvelteComponent } from 'svelte';

export interface FileBrushProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBrush extends SvelteComponent<FileBrushProps> {}
