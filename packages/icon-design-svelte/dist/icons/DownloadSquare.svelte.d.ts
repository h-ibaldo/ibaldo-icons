import { SvelteComponent } from 'svelte';

export interface DownloadSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquare extends SvelteComponent<DownloadSquareProps> {}
