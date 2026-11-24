import { SvelteComponent } from 'svelte';

export interface WindowDownloadPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDownloadPlain extends SvelteComponent<WindowDownloadPlainProps> {}
