import { SvelteComponent } from 'svelte';

export interface ProgressSpinnerDoubleLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressSpinnerDoubleLines extends SvelteComponent<ProgressSpinnerDoubleLinesProps> {}
