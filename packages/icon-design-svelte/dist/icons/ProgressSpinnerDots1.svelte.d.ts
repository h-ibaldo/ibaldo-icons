import { SvelteComponent } from 'svelte';

export interface ProgressSpinnerDots1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressSpinnerDots1 extends SvelteComponent<ProgressSpinnerDots1Props> {}
