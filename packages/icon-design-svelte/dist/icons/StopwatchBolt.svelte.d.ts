import { SvelteComponent } from 'svelte';

export interface StopwatchBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchBolt extends SvelteComponent<StopwatchBoltProps> {}
