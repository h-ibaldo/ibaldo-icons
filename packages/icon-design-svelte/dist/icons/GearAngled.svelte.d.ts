import { SvelteComponent } from 'svelte';

export interface GearAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearAngled extends SvelteComponent<GearAngledProps> {}
