import { SvelteComponent } from 'svelte';

export interface ClockLink1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockLink1 extends SvelteComponent<ClockLink1Props> {}
