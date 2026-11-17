import { SvelteComponent } from 'svelte';

export interface SpinnerSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerSplit extends SvelteComponent<SpinnerSplitProps> {}
