import { SvelteComponent } from 'svelte';

export interface PointerPlusCircleStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerPlusCircleStraight extends SvelteComponent<PointerPlusCircleStraightProps> {}
