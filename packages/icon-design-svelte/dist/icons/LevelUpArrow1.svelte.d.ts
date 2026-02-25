import { SvelteComponent } from 'svelte';

export interface LevelUpArrow1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelUpArrow1 extends SvelteComponent<LevelUpArrow1Props> {}
