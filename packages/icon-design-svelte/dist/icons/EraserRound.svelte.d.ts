import { SvelteComponent } from 'svelte';

export interface EraserRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EraserRound extends SvelteComponent<EraserRoundProps> {}
