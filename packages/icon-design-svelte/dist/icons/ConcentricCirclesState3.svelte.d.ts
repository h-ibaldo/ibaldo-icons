import { SvelteComponent } from 'svelte';

export interface ConcentricCirclesState3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConcentricCirclesState3 extends SvelteComponent<ConcentricCirclesState3Props> {}
