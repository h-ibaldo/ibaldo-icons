import { SvelteComponent } from 'svelte';

export interface LightbulbFilamentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbFilament extends SvelteComponent<LightbulbFilamentProps> {}
