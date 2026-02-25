import { SvelteComponent } from 'svelte';

export interface Clock1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Clock1 extends SvelteComponent<Clock1Props> {}
