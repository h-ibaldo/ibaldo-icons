import { SvelteComponent } from 'svelte';

export interface LightbulbShineCapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbShineCap extends SvelteComponent<LightbulbShineCapProps> {}
