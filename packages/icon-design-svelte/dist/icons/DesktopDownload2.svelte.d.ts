import { SvelteComponent } from 'svelte';

export interface DesktopDownload2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DesktopDownload2 extends SvelteComponent<DesktopDownload2Props> {}
