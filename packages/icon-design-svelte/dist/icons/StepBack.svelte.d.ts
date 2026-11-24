import { SvelteComponent } from 'svelte';

export interface StepBackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StepBack extends SvelteComponent<StepBackProps> {}
