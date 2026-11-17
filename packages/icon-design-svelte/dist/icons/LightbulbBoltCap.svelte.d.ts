import { SvelteComponent } from 'svelte';

export interface LightbulbBoltCapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbBoltCap extends SvelteComponent<LightbulbBoltCapProps> {}
