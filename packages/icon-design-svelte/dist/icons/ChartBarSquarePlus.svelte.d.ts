import { SvelteComponent } from 'svelte';

export interface ChartBarSquarePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquarePlus extends SvelteComponent<ChartBarSquarePlusProps> {}
