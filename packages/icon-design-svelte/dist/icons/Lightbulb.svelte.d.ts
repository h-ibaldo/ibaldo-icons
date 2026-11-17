import { SvelteComponent } from 'svelte';

export interface LightbulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lightbulb extends SvelteComponent<LightbulbProps> {}
