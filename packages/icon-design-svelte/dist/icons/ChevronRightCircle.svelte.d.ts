import { SvelteComponent } from 'svelte';

export interface ChevronRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronRightCircle extends SvelteComponent<ChevronRightCircleProps> {}
