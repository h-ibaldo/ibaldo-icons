import { SvelteComponent } from 'svelte';

export interface DownloadCircle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadCircle1 extends SvelteComponent<DownloadCircle1Props> {}
