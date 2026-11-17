import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3Plus extends SvelteComponent<ChartLineCircle3PlusProps> {}
