import { SvelteComponent } from 'svelte';

export interface ArrowDownToDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownToDotCircle extends SvelteComponent<ArrowDownToDotCircleProps> {}
