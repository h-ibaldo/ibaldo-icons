import { SvelteComponent } from 'svelte';

export interface ChartLineSquare2MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare2Minus extends SvelteComponent<ChartLineSquare2MinusProps> {}
