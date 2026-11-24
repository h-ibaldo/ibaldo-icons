import { SvelteComponent } from 'svelte';

export interface FileBrushPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBrushPlain extends SvelteComponent<FileBrushPlainProps> {}
