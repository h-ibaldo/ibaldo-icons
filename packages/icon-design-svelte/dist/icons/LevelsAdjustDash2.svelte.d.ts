import { SvelteComponent } from 'svelte';

export interface LevelsAdjustDash2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelsAdjustDash2 extends SvelteComponent<LevelsAdjustDash2Props> {}
