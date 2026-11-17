import { SvelteComponent } from 'svelte';

export interface Bell2CircleSilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2CircleSilent extends SvelteComponent<Bell2CircleSilentProps> {}
