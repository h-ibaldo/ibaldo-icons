import { SvelteComponent } from 'svelte';

export interface StopwatchBoltBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchBoltBare extends SvelteComponent<StopwatchBoltBareProps> {}
