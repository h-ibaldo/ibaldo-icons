import { SvelteComponent } from 'svelte';

export interface LevelsAdjustDash5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelsAdjustDash5 extends SvelteComponent<LevelsAdjustDash5Props> {}
