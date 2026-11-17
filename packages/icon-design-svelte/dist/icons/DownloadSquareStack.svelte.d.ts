import { SvelteComponent } from 'svelte';

export interface DownloadSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareStack extends SvelteComponent<DownloadSquareStackProps> {}
