import { SvelteComponent } from 'svelte';

export interface WindowListDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListDownload extends SvelteComponent<WindowListDownloadProps> {}
