import { SvelteComponent } from 'svelte';

export interface ArrowDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownCircle extends SvelteComponent<ArrowDownCircleProps> {}
