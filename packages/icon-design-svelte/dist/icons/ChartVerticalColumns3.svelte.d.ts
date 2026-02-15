import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumns3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumns3 extends SvelteComponent<ChartVerticalColumns3Props> {}
