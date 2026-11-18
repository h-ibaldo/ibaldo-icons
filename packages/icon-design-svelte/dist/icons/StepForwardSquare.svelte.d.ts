import { SvelteComponent } from 'svelte';

export interface StepForwardSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StepForwardSquare extends SvelteComponent<StepForwardSquareProps> {}
