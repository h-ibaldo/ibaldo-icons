import { SvelteComponent } from 'svelte';

export interface ProgressSpinnerLineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressSpinnerLine extends SvelteComponent<ProgressSpinnerLineProps> {}
