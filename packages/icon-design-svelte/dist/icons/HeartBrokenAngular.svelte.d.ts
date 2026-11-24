import { SvelteComponent } from 'svelte';

export interface HeartBrokenAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartBrokenAngular extends SvelteComponent<HeartBrokenAngularProps> {}
