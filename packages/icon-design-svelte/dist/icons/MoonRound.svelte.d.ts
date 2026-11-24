import { SvelteComponent } from 'svelte';

export interface MoonRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonRound extends SvelteComponent<MoonRoundProps> {}
