import { SvelteComponent } from 'svelte';

export interface ClockPinMapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockPinMap extends SvelteComponent<ClockPinMapProps> {}
