import { SvelteComponent } from 'svelte';

export interface HourglassSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSync extends SvelteComponent<HourglassSyncProps> {}
