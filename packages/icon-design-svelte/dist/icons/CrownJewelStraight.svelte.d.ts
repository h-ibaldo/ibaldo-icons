import { SvelteComponent } from 'svelte';

export interface CrownJewelStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrownJewelStraight extends SvelteComponent<CrownJewelStraightProps> {}
