import { SvelteComponent } from 'svelte';

export interface LightbulbBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbBolt extends SvelteComponent<LightbulbBoltProps> {}
