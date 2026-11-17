import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3MinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3Minus extends SvelteComponent<ChartLineCircle3MinusProps> {}
