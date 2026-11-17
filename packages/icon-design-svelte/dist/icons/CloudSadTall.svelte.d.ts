import { SvelteComponent } from 'svelte';

export interface CloudSadTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSadTall extends SvelteComponent<CloudSadTallProps> {}
