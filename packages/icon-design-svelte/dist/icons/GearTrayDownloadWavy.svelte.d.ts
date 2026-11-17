import { SvelteComponent } from 'svelte';

export interface GearTrayDownloadWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearTrayDownloadWavy extends SvelteComponent<GearTrayDownloadWavyProps> {}
