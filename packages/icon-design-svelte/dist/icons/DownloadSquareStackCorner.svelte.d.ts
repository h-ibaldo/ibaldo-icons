import { SvelteComponent } from 'svelte';

export interface DownloadSquareStackCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareStackCorner extends SvelteComponent<DownloadSquareStackCornerProps> {}
