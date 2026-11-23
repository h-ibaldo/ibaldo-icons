import { SvelteComponent } from 'svelte';

export interface LassoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lasso extends SvelteComponent<LassoProps> {}
