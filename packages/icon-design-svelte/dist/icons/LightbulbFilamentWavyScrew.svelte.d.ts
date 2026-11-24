import { SvelteComponent } from 'svelte';

export interface LightbulbFilamentWavyScrewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbFilamentWavyScrew extends SvelteComponent<LightbulbFilamentWavyScrewProps> {}
