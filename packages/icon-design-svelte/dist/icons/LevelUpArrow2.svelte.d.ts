import { SvelteComponent } from 'svelte';

export interface LevelUpArrow2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelUpArrow2 extends SvelteComponent<LevelUpArrow2Props> {}
