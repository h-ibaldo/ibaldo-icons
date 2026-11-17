import { SvelteComponent } from 'svelte';

export interface HandTouchTap2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchTap2 extends SvelteComponent<HandTouchTap2Props> {}
