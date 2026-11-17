import { SvelteComponent } from 'svelte';

export interface LightbulbBoltRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbBoltRound extends SvelteComponent<LightbulbBoltRoundProps> {}
