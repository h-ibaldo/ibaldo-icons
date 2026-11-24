import { SvelteComponent } from 'svelte';

export interface KeypadGridProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class KeypadGrid extends SvelteComponent<KeypadGridProps> {}
