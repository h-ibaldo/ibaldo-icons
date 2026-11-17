import { SvelteComponent } from 'svelte';

export interface StopwatchPlusBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchPlusBare extends SvelteComponent<StopwatchPlusBareProps> {}
