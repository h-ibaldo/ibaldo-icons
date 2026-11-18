import { SvelteComponent } from 'svelte';

export interface ChevronUpRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpRightCircle extends SvelteComponent<ChevronUpRightCircleProps> {}
