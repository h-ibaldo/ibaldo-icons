import { SvelteComponent } from 'svelte';

export interface StopwatchNeedleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchNeedle extends SvelteComponent<StopwatchNeedleProps> {}
