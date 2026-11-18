import { SvelteComponent } from 'svelte';

export interface StepForwardThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StepForwardThick extends SvelteComponent<StepForwardThickProps> {}
