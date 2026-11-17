import { SvelteComponent } from 'svelte';

export interface ClockSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockSquared extends SvelteComponent<ClockSquaredProps> {}
