import { SvelteComponent } from 'svelte';

export interface ChartBarSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareDot extends SvelteComponent<ChartBarSquareDotProps> {}
