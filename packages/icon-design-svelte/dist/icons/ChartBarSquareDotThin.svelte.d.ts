import { SvelteComponent } from 'svelte';

export interface ChartBarSquareDotThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareDotThin extends SvelteComponent<ChartBarSquareDotThinProps> {}
