import { SvelteComponent } from 'svelte';

export interface KeySmoothProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySmooth extends SvelteComponent<KeySmoothProps> {}
