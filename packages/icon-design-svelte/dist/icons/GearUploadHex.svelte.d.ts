import { SvelteComponent } from 'svelte';

export interface GearUploadHexProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearUploadHex extends SvelteComponent<GearUploadHexProps> {}
