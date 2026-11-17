import { SvelteComponent } from 'svelte';

export interface PointerRectangleDashedStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerRectangleDashedStraight extends SvelteComponent<PointerRectangleDashedStraightProps> {}
