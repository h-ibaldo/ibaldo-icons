import { SvelteComponent } from 'svelte';

export interface ArrowConvergeSixProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowConvergeSix extends SvelteComponent<ArrowConvergeSixProps> {}
