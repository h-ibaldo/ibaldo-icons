import { SvelteComponent } from 'svelte';

export interface ProgressSpinnerDots2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressSpinnerDots2 extends SvelteComponent<ProgressSpinnerDots2Props> {}
