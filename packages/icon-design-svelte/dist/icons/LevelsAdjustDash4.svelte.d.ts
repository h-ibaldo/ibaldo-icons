import { SvelteComponent } from 'svelte';

export interface LevelsAdjustDash4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelsAdjustDash4 extends SvelteComponent<LevelsAdjustDash4Props> {}
