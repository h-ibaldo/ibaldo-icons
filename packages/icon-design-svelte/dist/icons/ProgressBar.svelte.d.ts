import { SvelteComponent } from 'svelte';

export interface ProgressBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBar extends SvelteComponent<ProgressBarProps> {}
