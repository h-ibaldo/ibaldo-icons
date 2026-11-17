import { SvelteComponent } from 'svelte';

export interface CloudLightbulbTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLightbulbTall extends SvelteComponent<CloudLightbulbTallProps> {}
