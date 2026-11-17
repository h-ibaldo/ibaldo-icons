import { SvelteComponent } from 'svelte';

export interface WindowCloudPuffyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloudPuffy extends SvelteComponent<WindowCloudPuffyProps> {}
