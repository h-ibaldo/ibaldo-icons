import { SvelteComponent } from 'svelte';

export interface HandPointerFingersRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandPointerFingersRound extends SvelteComponent<HandPointerFingersRoundProps> {}
