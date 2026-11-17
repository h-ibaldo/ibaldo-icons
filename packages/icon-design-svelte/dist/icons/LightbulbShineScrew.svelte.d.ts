import { SvelteComponent } from 'svelte';

export interface LightbulbShineScrewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbShineScrew extends SvelteComponent<LightbulbShineScrewProps> {}
