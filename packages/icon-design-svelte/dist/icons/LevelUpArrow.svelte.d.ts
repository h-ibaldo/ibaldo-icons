import { SvelteComponent } from 'svelte';

export interface LevelUpArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelUpArrow extends SvelteComponent<LevelUpArrowProps> {}
