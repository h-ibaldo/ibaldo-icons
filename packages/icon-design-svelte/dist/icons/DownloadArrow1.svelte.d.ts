import { SvelteComponent } from 'svelte';

export interface DownloadArrow1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrow1 extends SvelteComponent<DownloadArrow1Props> {}
