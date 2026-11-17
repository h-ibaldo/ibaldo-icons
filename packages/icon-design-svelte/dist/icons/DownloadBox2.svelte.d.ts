import { SvelteComponent } from 'svelte';

export interface DownloadBox2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadBox2 extends SvelteComponent<DownloadBox2Props> {}
