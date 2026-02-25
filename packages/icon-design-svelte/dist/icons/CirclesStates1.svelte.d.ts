import { SvelteComponent } from 'svelte';

export interface CirclesStates1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CirclesStates1 extends SvelteComponent<CirclesStates1Props> {}
