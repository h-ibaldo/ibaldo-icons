import { SvelteComponent } from 'svelte';

export interface LevelsAdjustProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LevelsAdjust extends SvelteComponent<LevelsAdjustProps> {}
