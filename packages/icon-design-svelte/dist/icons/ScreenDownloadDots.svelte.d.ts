import { SvelteComponent } from 'svelte';

export interface ScreenDownloadDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenDownloadDots extends SvelteComponent<ScreenDownloadDotsProps> {}
