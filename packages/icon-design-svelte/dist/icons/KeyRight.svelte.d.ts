import { SvelteComponent } from 'svelte';

export interface KeyRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeyRight extends SvelteComponent<KeyRightProps> {}
