import { SvelteComponent } from 'svelte';

export interface HandTapTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapTwo extends SvelteComponent<HandTapTwoProps> {}
