import { SvelteComponent } from 'svelte';

export interface ClockTicksSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTicksSquared extends SvelteComponent<ClockTicksSquaredProps> {}
