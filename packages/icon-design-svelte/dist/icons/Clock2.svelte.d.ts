import { SvelteComponent } from 'svelte';

export interface Clock2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Clock2 extends SvelteComponent<Clock2Props> {}
