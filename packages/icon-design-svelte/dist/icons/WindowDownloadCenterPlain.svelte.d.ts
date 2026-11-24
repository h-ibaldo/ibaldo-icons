import { SvelteComponent } from 'svelte';

export interface WindowDownloadCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDownloadCenterPlain extends SvelteComponent<WindowDownloadCenterPlainProps> {}
