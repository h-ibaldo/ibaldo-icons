import { SvelteComponent } from 'svelte';

export interface CirclesStatesArrowTransitionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CirclesStatesArrowTransition extends SvelteComponent<CirclesStatesArrowTransitionProps> {}
