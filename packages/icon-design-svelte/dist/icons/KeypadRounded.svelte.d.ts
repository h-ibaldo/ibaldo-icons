import { SvelteComponent } from 'svelte';

export interface KeypadRoundedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeypadRounded extends SvelteComponent<KeypadRoundedProps> {}
