import { SvelteComponent } from 'svelte';

export interface ProgressBarMultipleDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarMultipleDotted extends SvelteComponent<ProgressBarMultipleDottedProps> {}
