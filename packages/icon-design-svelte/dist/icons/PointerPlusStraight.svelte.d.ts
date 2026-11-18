import { SvelteComponent } from 'svelte';

export interface PointerPlusStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerPlusStraight extends SvelteComponent<PointerPlusStraightProps> {}
