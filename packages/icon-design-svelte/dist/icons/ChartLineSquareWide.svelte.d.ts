import { SvelteComponent } from 'svelte';

export interface ChartLineSquareWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquareWide extends SvelteComponent<ChartLineSquareWideProps> {}
