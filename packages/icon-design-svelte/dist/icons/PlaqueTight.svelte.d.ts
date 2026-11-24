import { SvelteComponent } from 'svelte';

export interface PlaqueTightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlaqueTight extends SvelteComponent<PlaqueTightProps> {}
