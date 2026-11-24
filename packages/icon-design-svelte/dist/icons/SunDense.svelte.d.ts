import { SvelteComponent } from 'svelte';

export interface SunDenseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDense extends SvelteComponent<SunDenseProps> {}
