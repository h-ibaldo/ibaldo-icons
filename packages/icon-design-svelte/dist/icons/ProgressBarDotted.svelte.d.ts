import { SvelteComponent } from 'svelte';

export interface ProgressBarDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarDotted extends SvelteComponent<ProgressBarDottedProps> {}
