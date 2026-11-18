import { SvelteComponent } from 'svelte';

export interface FileBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileBan extends SvelteComponent<FileBanProps> {}
