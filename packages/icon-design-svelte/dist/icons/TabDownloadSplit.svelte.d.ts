import { SvelteComponent } from 'svelte';

export interface TabDownloadSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDownloadSplit extends SvelteComponent<TabDownloadSplitProps> {}
