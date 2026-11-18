import { SvelteComponent } from 'svelte';

export interface StepBackSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StepBackSquare extends SvelteComponent<StepBackSquareProps> {}
