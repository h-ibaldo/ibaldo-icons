import { SvelteComponent } from 'svelte';

export interface KeyAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyAngular extends SvelteComponent<KeyAngularProps> {}
