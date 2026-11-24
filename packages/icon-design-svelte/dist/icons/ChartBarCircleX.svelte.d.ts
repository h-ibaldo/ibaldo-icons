import { SvelteComponent } from 'svelte';

export interface ChartBarCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleX extends SvelteComponent<ChartBarCircleXProps> {}
