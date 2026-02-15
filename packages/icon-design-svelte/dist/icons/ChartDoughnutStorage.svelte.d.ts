import { SvelteComponent } from 'svelte';

export interface ChartDoughnutStorageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartDoughnutStorage extends SvelteComponent<ChartDoughnutStorageProps> {}
