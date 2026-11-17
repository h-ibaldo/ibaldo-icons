import { SvelteComponent } from 'svelte';

export interface DownloadBox1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadBox1 extends SvelteComponent<DownloadBox1Props> {}
