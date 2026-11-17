import { SvelteComponent } from 'svelte';

export interface GearDownloadHexProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearDownloadHex extends SvelteComponent<GearDownloadHexProps> {}
