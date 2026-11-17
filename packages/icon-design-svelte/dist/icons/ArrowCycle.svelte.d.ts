import { SvelteComponent } from 'svelte';

export interface ArrowCycleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCycle extends SvelteComponent<ArrowCycleProps> {}
