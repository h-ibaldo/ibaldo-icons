import { SvelteComponent } from 'svelte';

export interface LightbulbRaysSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbRaysSlim extends SvelteComponent<LightbulbRaysSlimProps> {}
