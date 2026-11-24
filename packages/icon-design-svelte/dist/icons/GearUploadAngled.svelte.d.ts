import { SvelteComponent } from 'svelte';

export interface GearUploadAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearUploadAngled extends SvelteComponent<GearUploadAngledProps> {}
