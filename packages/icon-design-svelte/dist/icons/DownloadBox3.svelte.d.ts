import { SvelteComponent } from 'svelte';

export interface DownloadBox3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadBox3 extends SvelteComponent<DownloadBox3Props> {}
