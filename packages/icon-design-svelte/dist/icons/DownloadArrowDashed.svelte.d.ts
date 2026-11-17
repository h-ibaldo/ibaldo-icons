import { SvelteComponent } from 'svelte';

export interface DownloadArrowDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrowDashed extends SvelteComponent<DownloadArrowDashedProps> {}
