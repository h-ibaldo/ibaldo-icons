import { SvelteComponent } from 'svelte';

export interface ArrowRepeatCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatCurved extends SvelteComponent<ArrowRepeatCurvedProps> {}
