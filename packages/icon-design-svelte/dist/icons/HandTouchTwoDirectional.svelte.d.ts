import { SvelteComponent } from 'svelte';

export interface HandTouchTwoDirectionalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchTwoDirectional extends SvelteComponent<HandTouchTwoDirectionalProps> {}
