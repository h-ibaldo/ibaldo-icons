import { SvelteComponent } from 'svelte';

export interface ArrowDivergeSixProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDivergeSix extends SvelteComponent<ArrowDivergeSixProps> {}
