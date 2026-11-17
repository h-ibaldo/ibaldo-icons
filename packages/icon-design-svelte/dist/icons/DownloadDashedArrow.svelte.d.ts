import { SvelteComponent } from 'svelte';

export interface DownloadDashedArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadDashedArrow extends SvelteComponent<DownloadDashedArrowProps> {}
