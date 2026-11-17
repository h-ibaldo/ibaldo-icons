import { SvelteComponent } from 'svelte';

export interface CloudLightbulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLightbulb extends SvelteComponent<CloudLightbulbProps> {}
