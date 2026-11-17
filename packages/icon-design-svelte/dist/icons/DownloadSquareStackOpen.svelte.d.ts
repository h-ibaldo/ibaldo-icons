import { SvelteComponent } from 'svelte';

export interface DownloadSquareStackOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareStackOpen extends SvelteComponent<DownloadSquareStackOpenProps> {}
