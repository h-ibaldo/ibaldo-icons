import { SvelteComponent } from 'svelte';

export interface ChevronRightLeftStaggeredCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronRightLeftStaggeredCircle extends SvelteComponent<ChevronRightLeftStaggeredCircleProps> {}
