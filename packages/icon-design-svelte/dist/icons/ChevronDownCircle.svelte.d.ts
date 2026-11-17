import { SvelteComponent } from 'svelte';

export interface ChevronDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownCircle extends SvelteComponent<ChevronDownCircleProps> {}
