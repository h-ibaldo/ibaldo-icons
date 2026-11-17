import { SvelteComponent } from 'svelte';

export interface LevelsAdjustDash3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelsAdjustDash3 extends SvelteComponent<LevelsAdjustDash3Props> {}
