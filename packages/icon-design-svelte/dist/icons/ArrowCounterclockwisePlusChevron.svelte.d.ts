import { SvelteComponent } from 'svelte';

export interface ArrowCounterclockwisePlusChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCounterclockwisePlusChevron extends SvelteComponent<ArrowCounterclockwisePlusChevronProps> {}
