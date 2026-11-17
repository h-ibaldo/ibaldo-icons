import { SvelteComponent } from 'svelte';

export interface DownloadSquareDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadSquareDashed extends SvelteComponent<DownloadSquareDashedProps> {}
