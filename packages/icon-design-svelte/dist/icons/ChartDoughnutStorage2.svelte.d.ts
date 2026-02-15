import { SvelteComponent } from 'svelte';

export interface ChartDoughnutStorage2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartDoughnutStorage2 extends SvelteComponent<ChartDoughnutStorage2Props> {}
