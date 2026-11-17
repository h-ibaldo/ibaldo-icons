import { SvelteComponent } from 'svelte';

export interface ProgressSpinnerDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressSpinnerDotted extends SvelteComponent<ProgressSpinnerDottedProps> {}
