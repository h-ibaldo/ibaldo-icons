import { SvelteComponent } from 'svelte';

export interface TabDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDownload extends SvelteComponent<TabDownloadProps> {}
