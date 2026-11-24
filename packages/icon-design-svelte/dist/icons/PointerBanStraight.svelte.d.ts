import { SvelteComponent } from 'svelte';

export interface PointerBanStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerBanStraight extends SvelteComponent<PointerBanStraightProps> {}
