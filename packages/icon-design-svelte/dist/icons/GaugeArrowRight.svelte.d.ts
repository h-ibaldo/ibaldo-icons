import { SvelteComponent } from 'svelte';

export interface GaugeArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeArrowRight extends SvelteComponent<GaugeArrowRightProps> {}
