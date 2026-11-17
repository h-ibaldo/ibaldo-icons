import { SvelteComponent } from 'svelte';

export interface WindowCloudPuffyBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloudPuffyBare extends SvelteComponent<WindowCloudPuffyBareProps> {}
