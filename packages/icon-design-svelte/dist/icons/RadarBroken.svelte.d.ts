import { SvelteComponent } from 'svelte';

export interface RadarBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RadarBroken extends SvelteComponent<RadarBrokenProps> {}
