import { SvelteComponent } from 'svelte';

export interface StepBackThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StepBackThick extends SvelteComponent<StepBackThickProps> {}
