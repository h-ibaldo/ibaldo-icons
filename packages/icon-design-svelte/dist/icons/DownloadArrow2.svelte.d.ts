import { SvelteComponent } from 'svelte';

export interface DownloadArrow2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrow2 extends SvelteComponent<DownloadArrow2Props> {}
