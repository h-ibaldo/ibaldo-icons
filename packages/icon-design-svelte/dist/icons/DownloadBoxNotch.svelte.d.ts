import { SvelteComponent } from 'svelte';

export interface DownloadBoxNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadBoxNotch extends SvelteComponent<DownloadBoxNotchProps> {}
