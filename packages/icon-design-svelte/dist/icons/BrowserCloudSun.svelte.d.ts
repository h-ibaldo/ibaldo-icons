import { SvelteComponent } from 'svelte';

export interface BrowserCloudSunProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserCloudSun extends SvelteComponent<BrowserCloudSunProps> {}
