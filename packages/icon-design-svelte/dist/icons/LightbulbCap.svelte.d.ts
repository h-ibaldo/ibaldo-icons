import { SvelteComponent } from 'svelte';

export interface LightbulbCapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbCap extends SvelteComponent<LightbulbCapProps> {}
