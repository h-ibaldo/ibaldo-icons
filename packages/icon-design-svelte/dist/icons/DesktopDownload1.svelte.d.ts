import { SvelteComponent } from 'svelte';

export interface DesktopDownload1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DesktopDownload1 extends SvelteComponent<DesktopDownload1Props> {}
