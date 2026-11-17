import { SvelteComponent } from 'svelte';

export interface ChartBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBar extends SvelteComponent<ChartBarProps> {}
