import { SvelteComponent } from 'svelte';

export interface WindowTextDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowTextDownload extends SvelteComponent<WindowTextDownloadProps> {}
