import { SvelteComponent } from 'svelte';

export interface HourglassStandSandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandSand extends SvelteComponent<HourglassStandSandProps> {}
