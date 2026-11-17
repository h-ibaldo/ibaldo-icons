import { SvelteComponent } from 'svelte';

export interface Cloud2LightbulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Lightbulb extends SvelteComponent<Cloud2LightbulbProps> {}
