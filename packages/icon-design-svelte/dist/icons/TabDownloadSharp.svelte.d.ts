import { SvelteComponent } from 'svelte';

export interface TabDownloadSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDownloadSharp extends SvelteComponent<TabDownloadSharpProps> {}
