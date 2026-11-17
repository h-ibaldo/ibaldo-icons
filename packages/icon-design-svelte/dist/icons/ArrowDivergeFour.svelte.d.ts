import { SvelteComponent } from 'svelte';

export interface ArrowDivergeFourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDivergeFour extends SvelteComponent<ArrowDivergeFourProps> {}
