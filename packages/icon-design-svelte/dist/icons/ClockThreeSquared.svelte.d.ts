import { SvelteComponent } from 'svelte';

export interface ClockThreeSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockThreeSquared extends SvelteComponent<ClockThreeSquaredProps> {}
