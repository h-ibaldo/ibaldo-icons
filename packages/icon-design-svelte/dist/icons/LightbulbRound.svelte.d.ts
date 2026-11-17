import { SvelteComponent } from 'svelte';

export interface LightbulbRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbRound extends SvelteComponent<LightbulbRoundProps> {}
