import { SvelteComponent } from 'svelte';

export interface SpinnerRaysLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerRaysLong extends SvelteComponent<SpinnerRaysLongProps> {}
