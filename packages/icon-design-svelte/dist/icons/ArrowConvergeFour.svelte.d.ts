import { SvelteComponent } from 'svelte';

export interface ArrowConvergeFourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowConvergeFour extends SvelteComponent<ArrowConvergeFourProps> {}
