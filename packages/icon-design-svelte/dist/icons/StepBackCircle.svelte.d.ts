import { SvelteComponent } from 'svelte';

export interface StepBackCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StepBackCircle extends SvelteComponent<StepBackCircleProps> {}
