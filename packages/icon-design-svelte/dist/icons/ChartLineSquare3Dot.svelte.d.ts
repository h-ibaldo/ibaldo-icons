import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3Dot extends SvelteComponent<ChartLineSquare3DotProps> {}
