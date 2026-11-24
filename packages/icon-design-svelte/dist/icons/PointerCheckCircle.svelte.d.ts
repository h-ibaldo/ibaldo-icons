import { SvelteComponent } from 'svelte';

export interface PointerCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerCheckCircle extends SvelteComponent<PointerCheckCircleProps> {}
