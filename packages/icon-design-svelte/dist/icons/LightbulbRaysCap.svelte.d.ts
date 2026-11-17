import { SvelteComponent } from 'svelte';

export interface LightbulbRaysCapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbRaysCap extends SvelteComponent<LightbulbRaysCapProps> {}
