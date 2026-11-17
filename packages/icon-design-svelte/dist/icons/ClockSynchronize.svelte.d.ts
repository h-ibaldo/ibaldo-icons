import { SvelteComponent } from 'svelte';

export interface ClockSynchronizeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSynchronize extends SvelteComponent<ClockSynchronizeProps> {}
