import { SvelteComponent } from 'svelte';

export interface HandGear1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandGear1 extends SvelteComponent<HandGear1Props> {}
