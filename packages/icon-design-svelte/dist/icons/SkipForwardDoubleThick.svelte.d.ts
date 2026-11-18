import { SvelteComponent } from 'svelte';

export interface SkipForwardDoubleThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardDoubleThick extends SvelteComponent<SkipForwardDoubleThickProps> {}
