import { SvelteComponent } from 'svelte';

export interface GaugeLongTicksFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeLongTicksFlat extends SvelteComponent<GaugeLongTicksFlatProps> {}
