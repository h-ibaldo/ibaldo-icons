import { SvelteComponent } from 'svelte';

export interface DownloadSquareNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareNotch extends SvelteComponent<DownloadSquareNotchProps> {}
