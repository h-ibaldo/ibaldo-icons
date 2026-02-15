import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumns2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumns2 extends SvelteComponent<ChartVerticalColumns2Props> {}
