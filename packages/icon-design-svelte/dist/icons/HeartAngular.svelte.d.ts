import { SvelteComponent } from 'svelte';

export interface HeartAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartAngular extends SvelteComponent<HeartAngularProps> {}
