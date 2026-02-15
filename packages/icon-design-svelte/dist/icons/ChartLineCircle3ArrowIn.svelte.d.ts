import { SvelteComponent } from 'svelte';

export interface ChartLineCircle3ArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle3ArrowIn extends SvelteComponent<ChartLineCircle3ArrowInProps> {}
