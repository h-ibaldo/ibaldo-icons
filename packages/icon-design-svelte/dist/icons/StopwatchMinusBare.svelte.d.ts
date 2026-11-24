import { SvelteComponent } from 'svelte';

export interface StopwatchMinusBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchMinusBare extends SvelteComponent<StopwatchMinusBareProps> {}
