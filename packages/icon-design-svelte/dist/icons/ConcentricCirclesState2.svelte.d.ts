import { SvelteComponent } from 'svelte';

export interface ConcentricCirclesState2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConcentricCirclesState2 extends SvelteComponent<ConcentricCirclesState2Props> {}
