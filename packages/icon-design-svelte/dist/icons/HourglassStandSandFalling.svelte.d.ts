import { SvelteComponent } from 'svelte';

export interface HourglassStandSandFallingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandSandFalling extends SvelteComponent<HourglassStandSandFallingProps> {}
