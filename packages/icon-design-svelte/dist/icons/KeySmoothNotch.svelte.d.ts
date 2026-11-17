import { SvelteComponent } from 'svelte';

export interface KeySmoothNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeySmoothNotch extends SvelteComponent<KeySmoothNotchProps> {}
