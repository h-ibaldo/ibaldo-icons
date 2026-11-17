import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3Minus extends SvelteComponent<ChartLineSquare3MinusProps> {}
