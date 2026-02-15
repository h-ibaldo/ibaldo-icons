import { SvelteComponent } from 'svelte';

export interface ChartLineSquare3ArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineSquare3ArrowIn extends SvelteComponent<ChartLineSquare3ArrowInProps> {}
