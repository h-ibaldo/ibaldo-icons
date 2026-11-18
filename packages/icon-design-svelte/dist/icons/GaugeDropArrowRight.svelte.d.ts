import { SvelteComponent } from 'svelte';

export interface GaugeDropArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeDropArrowRight extends SvelteComponent<GaugeDropArrowRightProps> {}
