import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3 extends SvelteComponent<ChartLineCircle3Props> {}
