import { SvelteComponent } from 'svelte';

export interface HandTouchTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchTap extends SvelteComponent<HandTouchTapProps> {}
