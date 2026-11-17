import { SvelteComponent } from 'svelte';

export interface StopwatchNeedleArcRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchNeedleArcRight extends SvelteComponent<StopwatchNeedleArcRightProps> {}
