import { SvelteComponent } from 'svelte';

export interface StopwatchNeedleArcLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchNeedleArcLeft extends SvelteComponent<StopwatchNeedleArcLeftProps> {}
