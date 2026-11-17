import { SvelteComponent } from 'svelte';

export interface HandTapOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapOne extends SvelteComponent<HandTapOneProps> {}
