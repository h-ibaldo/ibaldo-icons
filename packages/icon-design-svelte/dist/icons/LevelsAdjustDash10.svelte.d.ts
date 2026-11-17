import { SvelteComponent } from 'svelte';

export interface LevelsAdjustDash10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelsAdjustDash10 extends SvelteComponent<LevelsAdjustDash10Props> {}
