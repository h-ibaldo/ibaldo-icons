import { SvelteComponent } from 'svelte';

export interface LightbulbRaysProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbRays extends SvelteComponent<LightbulbRaysProps> {}
