import { SvelteComponent } from 'svelte';

export interface HandPointerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandPointerRound extends SvelteComponent<HandPointerRoundProps> {}
