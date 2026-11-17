import { SvelteComponent } from 'svelte';

export interface DownloadCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadCircle2 extends SvelteComponent<DownloadCircle2Props> {}
