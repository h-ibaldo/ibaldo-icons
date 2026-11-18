import { SvelteComponent } from 'svelte';

export interface ArrowRepeatOneCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatOneCurved extends SvelteComponent<ArrowRepeatOneCurvedProps> {}
