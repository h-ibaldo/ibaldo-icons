import { SvelteComponent } from 'svelte';

export interface GearDownloadAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearDownloadAngled extends SvelteComponent<GearDownloadAngledProps> {}
