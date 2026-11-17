import { SvelteComponent } from 'svelte';

export interface SpinnerDotsFadeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerDotsFade extends SvelteComponent<SpinnerDotsFadeProps> {}
