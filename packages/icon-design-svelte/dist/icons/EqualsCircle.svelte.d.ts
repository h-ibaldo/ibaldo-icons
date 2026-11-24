import { SvelteComponent } from 'svelte';

export interface EqualsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EqualsCircle extends SvelteComponent<EqualsCircleProps> {}
