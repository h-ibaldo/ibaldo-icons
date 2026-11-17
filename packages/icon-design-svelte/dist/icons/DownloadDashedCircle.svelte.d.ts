import { SvelteComponent } from 'svelte';

export interface DownloadDashedCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadDashedCircle extends SvelteComponent<DownloadDashedCircleProps> {}
