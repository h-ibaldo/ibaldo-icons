import { SvelteComponent } from 'svelte';

export interface GaugeUpLeftOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeUpLeftOpen extends SvelteComponent<GaugeUpLeftOpenProps> {}
