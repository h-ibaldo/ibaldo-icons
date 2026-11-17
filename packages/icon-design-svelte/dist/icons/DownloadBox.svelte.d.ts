import { SvelteComponent } from 'svelte';

export interface DownloadBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadBox extends SvelteComponent<DownloadBoxProps> {}
