import { SvelteComponent } from 'svelte';

export interface ArrowUpDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpDownCircle extends SvelteComponent<ArrowUpDownCircleProps> {}
