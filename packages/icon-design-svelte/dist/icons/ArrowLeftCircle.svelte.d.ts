import { SvelteComponent } from 'svelte';

export interface ArrowLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftCircle extends SvelteComponent<ArrowLeftCircleProps> {}
