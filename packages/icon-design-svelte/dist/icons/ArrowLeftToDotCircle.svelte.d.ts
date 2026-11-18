import { SvelteComponent } from 'svelte';

export interface ArrowLeftToDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftToDotCircle extends SvelteComponent<ArrowLeftToDotCircleProps> {}
