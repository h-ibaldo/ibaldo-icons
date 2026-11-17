import { SvelteComponent } from 'svelte';

export interface StopwatchBoltDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchBoltDetached extends SvelteComponent<StopwatchBoltDetachedProps> {}
