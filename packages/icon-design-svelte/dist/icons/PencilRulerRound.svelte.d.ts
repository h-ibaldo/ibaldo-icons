import { SvelteComponent } from 'svelte';

export interface PencilRulerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilRulerRound extends SvelteComponent<PencilRulerRoundProps> {}
