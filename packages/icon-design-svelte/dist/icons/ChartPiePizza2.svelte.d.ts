import { SvelteComponent } from 'svelte';

export interface ChartPiePizza2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartPiePizza2 extends SvelteComponent<ChartPiePizza2Props> {}
