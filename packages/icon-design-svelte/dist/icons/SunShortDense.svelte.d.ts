import { SvelteComponent } from 'svelte';

export interface SunShortDenseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShortDense extends SvelteComponent<SunShortDenseProps> {}
