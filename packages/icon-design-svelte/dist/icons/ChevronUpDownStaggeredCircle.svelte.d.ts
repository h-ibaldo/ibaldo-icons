import { SvelteComponent } from 'svelte';

export interface ChevronUpDownStaggeredCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpDownStaggeredCircle extends SvelteComponent<ChevronUpDownStaggeredCircleProps> {}
