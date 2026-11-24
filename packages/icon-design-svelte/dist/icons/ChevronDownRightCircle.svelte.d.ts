import { SvelteComponent } from 'svelte';

export interface ChevronDownRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownRightCircle extends SvelteComponent<ChevronDownRightCircleProps> {}
