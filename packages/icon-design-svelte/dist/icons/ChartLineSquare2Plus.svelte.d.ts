import { SvelteComponent } from 'svelte';

export interface ChartLineSquare2PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare2Plus extends SvelteComponent<ChartLineSquare2PlusProps> {}
