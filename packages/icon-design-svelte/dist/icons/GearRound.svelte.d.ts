import { SvelteComponent } from 'svelte';

export interface GearRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearRound extends SvelteComponent<GearRoundProps> {}
