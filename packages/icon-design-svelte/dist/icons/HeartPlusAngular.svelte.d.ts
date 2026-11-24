import { SvelteComponent } from 'svelte';

export interface HeartPlusAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartPlusAngular extends SvelteComponent<HeartPlusAngularProps> {}
