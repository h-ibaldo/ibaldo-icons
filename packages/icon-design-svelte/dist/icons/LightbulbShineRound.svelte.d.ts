import { SvelteComponent } from 'svelte';

export interface LightbulbShineRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbShineRound extends SvelteComponent<LightbulbShineRoundProps> {}
