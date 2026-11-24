import { SvelteComponent } from 'svelte';

export interface WindowCloudCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloudCenterBare extends SvelteComponent<WindowCloudCenterBareProps> {}
