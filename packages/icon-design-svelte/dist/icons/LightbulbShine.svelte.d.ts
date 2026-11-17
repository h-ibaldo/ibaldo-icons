import { SvelteComponent } from 'svelte';

export interface LightbulbShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbShine extends SvelteComponent<LightbulbShineProps> {}
