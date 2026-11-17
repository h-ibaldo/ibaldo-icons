import { SvelteComponent } from 'svelte';

export interface ChartLineCircle2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle2Check extends SvelteComponent<ChartLineCircle2CheckProps> {}
