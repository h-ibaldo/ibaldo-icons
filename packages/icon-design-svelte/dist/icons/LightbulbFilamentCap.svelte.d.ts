import { SvelteComponent } from 'svelte';

export interface LightbulbFilamentCapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbFilamentCap extends SvelteComponent<LightbulbFilamentCapProps> {}
