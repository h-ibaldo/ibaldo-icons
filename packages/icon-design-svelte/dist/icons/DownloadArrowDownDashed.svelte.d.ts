import { SvelteComponent } from 'svelte';

export interface DownloadArrowDownDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrowDownDashed extends SvelteComponent<DownloadArrowDownDashedProps> {}
