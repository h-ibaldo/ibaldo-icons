import { SvelteComponent } from 'svelte';

export interface DownloadSquareOpenPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareOpenPlain extends SvelteComponent<DownloadSquareOpenPlainProps> {}
