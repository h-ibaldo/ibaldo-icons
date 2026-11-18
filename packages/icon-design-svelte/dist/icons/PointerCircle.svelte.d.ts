import { SvelteComponent } from 'svelte';

export interface PointerCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerCircle extends SvelteComponent<PointerCircleProps> {}
