import { SvelteComponent } from 'svelte';

export interface GearUploadWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearUploadWavy extends SvelteComponent<GearUploadWavyProps> {}
