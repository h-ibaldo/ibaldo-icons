import { SvelteComponent } from 'svelte';

export interface SpinnerRaysShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerRaysShort extends SvelteComponent<SpinnerRaysShortProps> {}
