import { SvelteComponent } from 'svelte';

export interface GaugeArcSemicircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArcSemicircle extends SvelteComponent<GaugeArcSemicircleProps> {}
