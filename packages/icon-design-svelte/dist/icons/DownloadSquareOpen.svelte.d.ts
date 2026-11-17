import { SvelteComponent } from 'svelte';

export interface DownloadSquareOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareOpen extends SvelteComponent<DownloadSquareOpenProps> {}
