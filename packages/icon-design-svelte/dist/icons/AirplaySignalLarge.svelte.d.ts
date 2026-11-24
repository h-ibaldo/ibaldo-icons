import { SvelteComponent } from 'svelte';

export interface AirplaySignalLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignalLarge extends SvelteComponent<AirplaySignalLargeProps> {}
