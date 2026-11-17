import { SvelteComponent } from 'svelte';

export interface ChartBarSquareXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarSquareX extends SvelteComponent<ChartBarSquareXProps> {}
