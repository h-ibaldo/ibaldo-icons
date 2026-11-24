import { SvelteComponent } from 'svelte';

export interface CloudLightbulbRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLightbulbRound extends SvelteComponent<CloudLightbulbRoundProps> {}
