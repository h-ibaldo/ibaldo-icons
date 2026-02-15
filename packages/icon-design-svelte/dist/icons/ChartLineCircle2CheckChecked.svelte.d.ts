import { SvelteComponent } from 'svelte';

export interface ChartLineCircle2CheckCheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircle2CheckChecked extends SvelteComponent<ChartLineCircle2CheckCheckedProps> {}
