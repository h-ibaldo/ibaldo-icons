import { SvelteComponent } from 'svelte';

export interface SpinnerRays2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerRays2 extends SvelteComponent<SpinnerRays2Props> {}
