import { SvelteComponent } from 'svelte';

export interface ChalkboardChartNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChalkboardChartNotch extends SvelteComponent<ChalkboardChartNotchProps> {}
