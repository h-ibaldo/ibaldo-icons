import { SvelteComponent } from 'svelte';

export interface LightbulbFilamentZigzagRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbFilamentZigzagRound extends SvelteComponent<LightbulbFilamentZigzagRoundProps> {}
