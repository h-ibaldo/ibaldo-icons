import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3CheckCheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3CheckChecked extends SvelteComponent<ChartLineCircle3CheckCheckedProps> {}
