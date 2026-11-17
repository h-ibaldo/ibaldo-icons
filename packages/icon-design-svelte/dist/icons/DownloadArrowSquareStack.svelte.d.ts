import { SvelteComponent } from 'svelte';

export interface DownloadArrowSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrowSquareStack extends SvelteComponent<DownloadArrowSquareStackProps> {}
