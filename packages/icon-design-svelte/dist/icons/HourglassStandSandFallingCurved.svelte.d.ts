import { SvelteComponent } from 'svelte';

export interface HourglassStandSandFallingCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandSandFallingCurved extends SvelteComponent<HourglassStandSandFallingCurvedProps> {}
