import { SvelteComponent } from 'svelte';

export interface HeartStripedAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartStripedAngular extends SvelteComponent<HeartStripedAngularProps> {}
