import { SvelteComponent } from 'svelte';

export interface CirclesStates2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CirclesStates2 extends SvelteComponent<CirclesStates2Props> {}
