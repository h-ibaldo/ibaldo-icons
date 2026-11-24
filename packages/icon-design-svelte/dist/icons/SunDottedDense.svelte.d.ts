import { SvelteComponent } from 'svelte';

export interface SunDottedDenseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDottedDense extends SvelteComponent<SunDottedDenseProps> {}
