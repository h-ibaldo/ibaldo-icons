import { SvelteComponent } from 'svelte';

export interface DownloadCircleFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadCircleFlat extends SvelteComponent<DownloadCircleFlatProps> {}
