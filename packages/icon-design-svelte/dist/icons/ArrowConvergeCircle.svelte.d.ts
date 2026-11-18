import { SvelteComponent } from 'svelte';

export interface ArrowConvergeCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowConvergeCircle extends SvelteComponent<ArrowConvergeCircleProps> {}
