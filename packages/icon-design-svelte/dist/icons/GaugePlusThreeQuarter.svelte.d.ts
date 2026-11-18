import { SvelteComponent } from 'svelte';

export interface GaugePlusThreeQuarterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugePlusThreeQuarter extends SvelteComponent<GaugePlusThreeQuarterProps> {}
