import { SvelteComponent } from 'svelte';

export interface DownloadTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadTriangle extends SvelteComponent<DownloadTriangleProps> {}
