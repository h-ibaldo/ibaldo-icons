import { SvelteComponent } from 'svelte';

export interface ConcentricCirclesState1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConcentricCirclesState1 extends SvelteComponent<ConcentricCirclesState1Props> {}
