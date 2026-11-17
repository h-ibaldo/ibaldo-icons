import { SvelteComponent } from 'svelte';

export interface ArrowCycle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCycle2 extends SvelteComponent<ArrowCycle2Props> {}
