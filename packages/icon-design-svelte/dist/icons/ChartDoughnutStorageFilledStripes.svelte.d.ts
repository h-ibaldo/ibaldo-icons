import { SvelteComponent } from 'svelte';

export interface ChartDoughnutStorageFilledStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartDoughnutStorageFilledStripes extends SvelteComponent<ChartDoughnutStorageFilledStripesProps> {}
