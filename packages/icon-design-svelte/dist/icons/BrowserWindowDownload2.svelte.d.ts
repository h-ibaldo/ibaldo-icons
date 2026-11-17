import { SvelteComponent } from 'svelte';

export interface BrowserWindowDownload2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowDownload2 extends SvelteComponent<BrowserWindowDownload2Props> {}
