import { SvelteComponent } from 'svelte';

export interface ChartLineCircle2ArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle2ArrowIn extends SvelteComponent<ChartLineCircle2ArrowInProps> {}
