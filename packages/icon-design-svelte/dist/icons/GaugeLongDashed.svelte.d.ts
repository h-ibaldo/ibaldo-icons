import { SvelteComponent } from 'svelte';

export interface GaugeLongDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeLongDashed extends SvelteComponent<GaugeLongDashedProps> {}
