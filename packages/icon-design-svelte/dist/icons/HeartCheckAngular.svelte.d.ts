import { SvelteComponent } from 'svelte';

export interface HeartCheckAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartCheckAngular extends SvelteComponent<HeartCheckAngularProps> {}
