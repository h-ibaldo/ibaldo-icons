import { SvelteComponent } from 'svelte';

export interface DesktopDownload3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DesktopDownload3 extends SvelteComponent<DesktopDownload3Props> {}
